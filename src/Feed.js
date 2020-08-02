import React, { Component } from 'react';
import Post from './Post'
import loading from './images/loading.gif';
import './css/Feed.css'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      after: null,
      items: [],
      prevY: 0,
      endReached: false
    };
  }


  getPosts(after, abortOnError) {
    if (this.state.error !== null && !abortOnError) {
      // don't keep loading the page on error.
      return;
    }

    let url = "https://www.reddit.com/r/"+this.props.subreddit+"/top/.json";
    if (this.state.after) {
      url += "?after=" + this.state.after;
    }
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: [...this.state.items, ...result.data.children],
            after : result.data.after,
            endReached: result.data.after === null,
          });
        },
        (error) => {
          this.setState({
            error: error
          });
          console.log("error:", error);
        }
      )
  }

  componentDidMount(){
    this.getPosts(this.state.after, /* abortOnError = */false);

    // Trigger page load when loadingRef becomes visible
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
    
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y && !this.state.endReached) {
      this.getPosts(this.state.after, /* abortOnError = */true);
    }
    this.setState({ prevY: y });
  }

  render() {
    const { error, items, endReached } = this.state;
    let element = null;
    if (error) {
      element = <span>Error: Failed to fetch the data. Make sure your browser has 
                <a href="https://github.com/jp0707/reddit-react/blob/master/README.md#disable-cors">
                CORS disabled</a>.
                <button onClick={() => {
                  this.getPosts(this.state.after, /* abortOnError = */false);
                }}> Retry</button></span>;
    } else if (!endReached) {
      element = <div className="loading-container"><img src={loading} alt="Loading"/> Loading...</div>;
    }
    return (
      <React.Fragment>
        {items.map(item => (<Post data={item.data} key={item.data.name}/>))}
        <div ref={r => (this.loadingRef = r)}>
          {element}
        </div>
      </React.Fragment>
    );
  }
}

export default Feed;

import React, { Component } from 'react';
import Post from './Post'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      after: null,
      items: [],
      prevY: 0
    };
  }


  getPosts(after, abortOnError) {
    if (this.state.error !== null && !abortOnError) {
      // don't keep loading the page on error.
      return;
    }

    let url = "http://www.reddit.com/r/aww/top/.json";
    if (this.state.after) {
      url += "?after=" + this.state.after;
    }
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: [...this.state.items, ...result.data.children],
            after : result.data.after
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
    if (this.state.prevY > y) {
      this.getPosts(this.state.after, /* abortOnError = */true);
    }
    this.setState({ prevY: y });
  }

  render() {
    const { error, items } = this.state;
    let element;
    if (error) {
      element = <span>Error: {error.message} <button onClick={() => {
        this.getPosts(this.state.after, /* abortOnError = */false);
      }}> Retry</button></span>;
    } else {
      element = <span>Loading...</span>;
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

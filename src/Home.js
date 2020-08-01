import React, { Component } from 'react';
import loading from './images/loading.gif';
import { Link } from "react-router-dom";

class Home extends Component {
  
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

    let url = "https://www.reddit.com/subreddits/.json";
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
      threshold: 1.0
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
      element = <span>Error: Failed to fetch the data. Make sure your browser has 
                <a href="https://github.com/jp0707/reddit-react/blob/master/README.md#disable-cors">
                CORS disabled</a>.
                <button onClick={() => {
                  this.getPosts(this.state.after, /* abortOnError = */false);
                }}> Retry</button></span>;
    } else {
      element = <div className="loading-container"><img src={loading} alt="Loading"/> Loading...</div>;
    }
    return (
      <React.Fragment>

        <div> <h1> List of Subreddits </h1> </div>

        <table>
          <thead>
            <tr>
              <th>Subreddit</th>
              <th>Discription</th>
            </tr>
          </thead>
          <tbody>
          {items.map(item => (
            <tr>
              <td><Link to={item.data.url}>{item.data.display_name_prefixed}</Link></td>
              <td>{item.data.public_description}</td>
            </tr>))}
          </tbody>
        </table>

        <div ref={r => (this.loadingRef = r)}>
          {element}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

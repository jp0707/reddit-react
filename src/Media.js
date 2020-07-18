import React, { Component } from 'react';
import './css/Media.css'

class Media extends Component {
  render() {
    if(this.props.is_video) {
      // TODO: Handle video types better!
      return(null);
    } else {
      return (<img className="post-img" src={this.props.url} alt=""/>);
    }
  }
}

export default Media;

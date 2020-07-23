import React, { Component } from 'react';
import upvote from './images/upvote.jpeg';
import './css/CommentButton.css'

class CommentButton extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={upvote} alt="" className="comment-img"/>
        <span className="comment-count">{this.props.commentCount}</span>
      </React.Fragment>
    );
  }
}

export default CommentButton;

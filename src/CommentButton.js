import React, { Component } from 'react';
import comment from './images/comment.png';
import './css/CommentButton.css'

class CommentButton extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={comment} alt="" className="comment-img"/>
        <span className="comment-count">{this.props.commentCount}</span>
      </React.Fragment>
    );
  }
}

export default CommentButton;

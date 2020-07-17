import React, { Component } from 'react';
import upvote from './images/upvote.jpeg';
import upvoted from './images/upvoted.jpeg';
import downvote from './images/downvote.jpeg';
import downvoted from './images/downvoted.jpeg';
import './css/VoteButtons.css'

const VoteState = {
  NONE: 0,
  UPVOTED: 1,
  DOWNVOTED: 2
};

class VoteButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ups:this.props.ups,
      vote_state: VoteState.NONE,
    };

    this.onUpvoteClick = this.onUpvoteClick.bind(this);
    this.onDownvoteClick = this.onDownvoteClick.bind(this);
  }

  onUpvoteClick() {
    let curState = this.state.vote_state;
    let newVotes = this.state.ups;
    let newState = VoteState.UPVOTED;
    if(curState === VoteState.NONE){
      newVotes += 1;
    } else if(curState === VoteState.UPVOTED){
      // undo upvote
      newVotes -= 1;
      newState = VoteState.NONE;
    } else if(curState === VoteState.DOWNVOTED){
      newVotes += 2;
    }

    this.setState({
      ups: newVotes,
      vote_state: newState
    });
  }

  onDownvoteClick() {
    let curState = this.state.vote_state;
    let newVotes = this.state.ups;
    let newState = VoteState.DOWNVOTED;
    if(curState === VoteState.NONE){
      newVotes -= 1;
    } else if(curState === VoteState.DOWNVOTED) {
      // undo downvote
      newVotes += 1;
      newState = VoteState.NONE;
    } else if(curState === VoteState.UPVOTED){
      newVotes -= 2;
    }

    this.setState({
      ups: newVotes,
      vote_state: newState
    });
  }

  render() {
    let upvote_src = upvote;
    let downvote_src = downvote;
    if(this.state.vote_state === VoteState.UPVOTED){
      upvote_src = upvoted;
    } else if(this.state.vote_state === VoteState.DOWNVOTED){
      downvote_src = downvoted;
    }

    return (
      <React.Fragment>
        <img src={upvote_src} alt="" onClick={this.onUpvoteClick} className="vote-img"/>
        <span className="votes-count">{this.state.ups}</span>
        <img src={downvote_src} alt="" onClick={this.onDownvoteClick} className="vote-img"/>
      </React.Fragment>
    );
  }
}

export default VoteButtons;

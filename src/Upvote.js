import React, { Component } from 'react';

class Upvote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleclick(){
    this.setState({isClicked: true});
  }

  render() {
    // TODO: Show this better!
    return (
      <button onClick={this.props.handleclick}> Upvote {this.props.ups}</button>
    );
  }
}

export default Upvote;

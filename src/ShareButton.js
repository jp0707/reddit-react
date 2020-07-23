import React, { Component } from 'react';
import upvote from './images/upvote.jpeg';
import './css/ShareButton.css'
import copy from 'copy-to-clipboard';
import Toast from 'react-bootstrap/Toast'

class ShareButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showCopied : false
    };
  }

  onShareClick = () => {
    copy(this.props.url);
    this.setState({
      showCopied: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <img src={upvote} alt="Share" onClick={this.onShareClick} className="share-img"/>
        <Toast
          onClose={() => this.setState({showCopied:false})}
          show={this.state.showCopied}
          delay={1000}
          autohide>
          <Toast.Body>Copied!</Toast.Body>
        </Toast>
      </React.Fragment>
    );
  }
}

export default ShareButton;

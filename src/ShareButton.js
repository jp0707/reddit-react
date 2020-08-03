import React, { Component } from 'react';
import share from './images/share.jpg';
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
    const shareData = {
      title: this.props.title,
      text: this.props.title,
      url: this.props.url,
    };
    if(navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData)
        .then(() => console.log('Share was successful.'))
        .catch((error) => console.log('Sharing failed!' + error))
    } else {
      copy(this.props.url);
      this.setState({
        showCopied: true
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <img src={share} alt="Share" onClick={this.onShareClick} className="share-img"/>
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

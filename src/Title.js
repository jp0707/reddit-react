import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Title extends Component {
  render() {
    return (
      <Card.Text>
        {this.props.value}
      </Card.Text>
    );
  }
}

export default Title;

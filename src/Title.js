import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Moment from 'react-moment';

class Title extends Component {
  render() {
    let currentTime= <Moment format="YYYY-MM-DD:HH-mm">
              <Moment unix>{this.props.created_utc}</Moment>
            </Moment> ;
    return (
      <div>
        <Card.Text>
          {this.props.title}
        </Card.Text>
        <Card.Text>
          Posted by : '{this.props.author}' --- <Moment fromNow>{currentTime}</Moment>
        </Card.Text>
      </div>
    );
  }
}

export default Title;

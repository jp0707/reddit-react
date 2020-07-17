import React, { Component } from 'react';
import Title from './Title'
import Media from './Media'
import Upvote from './Upvote'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Post.css';

class Post extends Component {
  render() {
    // TODO: Handle other post types
    if(!this.props.data.url.startsWith('https://i.redd.it/')){
      return(null);
    }

    return (
      <Row>
        <Card className="post-card">
          <Card.Body>
        <Title value={this.props.data.title}/>
        </Card.Body>
        <Media url={this.props.data.url} is_video={this.props.data.is_video} poster={this.props.data.preview.images[0].source.url}/>
          <Row>
            <Col className="col-sm-4">
              <Upvote ups={this.props.data.ups}/>
            </Col>
            <Col className="col-sm-4">
              <Upvote/>
            </Col>
            <Col className="col-sm-4">
              <Upvote/>
            </Col>
          </Row>
        </Card>
      </Row>
    );
  }
}

export default Post;

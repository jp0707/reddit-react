import React, { Component } from 'react';
import Title from './Title'
import Media from './Media'
import CommentButton from './CommentButton'
import ShareButton from './ShareButton'
import VoteButtons from './VoteButtons'
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
        <Card className="post-card" style={{margin: 5}}>
          <Card.Body>
            <Title title={this.props.data.title} 
              author={this.props.data.author} 
              created_utc={this.props.data.created_utc}/>
            </Card.Body>
            <Media url={this.props.data.url} 
              is_video={this.props.data.is_video} 
              poster={this.props.data.preview.images[0].source.url}/>
            <Row>
              <Col className="col-sm-4" align="center">
                <VoteButtons ups={this.props.data.ups}/>
              </Col>
              <Col className="col-sm-4" align="center">
                <CommentButton commentCount={this.props.data.num_comments}></CommentButton>
              </Col>
              <Col className="col-sm-4" align="center">
                <ShareButton url={this.props.data.url}></ShareButton>
              </Col>
            </Row>
        </Card>
      </Row>
    );
  }
}

export default Post;

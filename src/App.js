import React, { Component } from 'react';
import Feed from './Feed'
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Feed />
        </Container>
      </div>
    );
  }
}

export default App;

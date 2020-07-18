import React, { Component } from 'react';
import Home from './Home'
import SubReddit from './SubReddit'
import Container from 'react-bootstrap/Container';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/r/:subreddit/">
              <SubReddit />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;

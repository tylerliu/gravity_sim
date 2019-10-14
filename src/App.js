import React, { Component } from 'react';
import './App.css';
import Stage from './Stage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Stage/>
      </Container>
    )
  }
}

export default App;

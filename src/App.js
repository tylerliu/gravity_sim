import React, { Component } from 'react';
import './App.css';
import Stage from './Stage';
import Controller from "./Controller";

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "100vh", width: "100vw", flex : 1}}>
        <Stage/>
        <Controller/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidePane from './features/SidePane'

class App extends Component {

  onInputDone(inputs) {
    console.log(inputs)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SidePane onInputDone={this.onInputDone.bind(this)} />
      </div>
    );
  }
}

export default App;

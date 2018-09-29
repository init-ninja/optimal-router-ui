import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidePane from './features/SidePane'
import { getRoutes } from './helpers/api-helper'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       input: [],
       routes: []
    }
  }

  onInputDone(input) {
    getRoutes(input).then((response) => {
      response.json().then((data) => this.setState(
         {
            input : input,
            routes : data
         }))
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SidePane
           onInputDone={this.onInputDone.bind(this)}
           input={this.state.input}
           routes={this.state.routes} />
      </div>
    );
  }
}

export default App;

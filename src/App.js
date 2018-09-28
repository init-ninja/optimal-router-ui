import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidePane from './features/SidePane'
import { getRoutes } from './helpers/api-helper'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  onInputDone(inputs) {
    getRoutes(inputs).then((response) => {
      response.json().then((data) => console.log(data))
      // TODO: Link inputs (has point latlng + point names) and data (has only point latlngs)
    })
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

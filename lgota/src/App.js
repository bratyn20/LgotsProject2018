import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react'

@observer
class App extends Component {
  render() {
    console.log(5)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PRIV</h2>
        </div>
        <p className="App-intro">
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {this.props.store.text}
        </p>
        <button onClick = {() => this.props.store.go()}> go </button>
        <button onClick = {() => this.props.store.one()}> go </button>
      </div>
    );
  }
}

export default App;

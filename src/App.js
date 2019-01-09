import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import EveryOtherComponent from './containers/EveryOtherComponent'
import {Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login />
      <EveryOtherComponent />
      </div>
    );
  }
}

export default App;

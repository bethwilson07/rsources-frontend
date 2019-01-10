import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import HomePage from './containers/HomePage'
import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'
import { Route } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <div className="App">

        <Route exact path='/login' render ={() => {
          return (

              <Login />
            )
          }} />

            <TopNavBar />
            <SideNavBar />
        <Route exact path='/home' render ={() => {
          return ( <HomePage />)
          }} />


      </div>
    );
  }
}

export default App;

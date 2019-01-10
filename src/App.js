import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import HomePage from './containers/HomePage'
import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'
import SubjectPage from './containers/SubjectPage'
import { Route } from 'react-router-dom'
import CourseShowPage from './containers/CourseShowPage'

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

        <Route exact path={`/subject/:id`} render ={(props) => {
          return ( <SubjectPage history={props.history} match={props.match}/>)
          }} />

        <Route exact path={`/course/:id`} render ={(props) => {
            console.log('boop');
          return ( <CourseShowPage history={props.history} match={props.match}/>)
          }} />


      </div>
    );
  }
}

export default App;

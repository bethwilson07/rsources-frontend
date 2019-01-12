import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import TopNavBar from './components/TopNavBar'
import HomePage from './containers/HomePage'
import SubjectPage from './containers/SubjectPage'
import ResourceShowPage from './containers/ResourceShowPage'
import FilteredCoursePage from './containers/FilteredCoursePage'
import { Route, withRouter, Redirect} from 'react-router-dom'
import CourseShowPage from './containers/CourseShowPage'

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentUser: null,
      loading: true
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/profile`, {
        method: "GET",
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      }).then(res => res.json()) //GET fetch
      .then(data => {
        this.setState({
          currentUser: data.user,
          loading: false
        })
      })
    }else{
      this.setState({
        loading: false
      })
    }
  }

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  render() {
    return (
      <div className="App">

        <TopNavBar logged_in={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>

        <Route exact path="/login" render={() => this.state.loading ? null : (this.state.currentUser ?
            <Redirect to="/home" /> :
            <Login setCurrentUser={this.setCurrentUser}/> )}
        />

        <Route exact path='/home' render ={() => {
          return ( <HomePage currentUser={this.state.currentUser}/>)
          }} />

        <Route exact path={`/subject/:id`} render ={(props) => {
          return ( <SubjectPage
            history={props.history}
            match={props.match}
            currentUser={this.state.currentUser}/>)
          }} />

        <Route exact path={`/course/:id`} render ={(props) => {
          return ( <CourseShowPage
            history={props.history}
            match={props.match}
            currentUser={this.state.currentUser}/>)
          }} />

        <Route exact path={`/course/:id/resources/:name`} render ={(props) => {
          return ( <FilteredCoursePage
            history={props.history}
            match={props.match}
            currentUser={this.state.currentUser}/>)
          }} />

        <Route exact path={`/resource/show/:id`} render ={(props) => {
          return ( <ResourceShowPage
            history={props.history}
            match={props.match}
            currentUser={this.state.currentUser}/>)
          }} />


      </div>
    );
  }
}

export default withRouter(App);

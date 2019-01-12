import React from 'react';
import ResourceContainer from './ResourceContainer';
import PostContainer from './PostContainer';
import {fetchingCourses} from '../redux/actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CourseShowPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingCourses());
  }

  getCurrentCourseName() {
    if (this.props.courses[0]){
      return this.props.courses.find(c => c.id === parseInt(this.props.match.params.id)).name;
    } else {
      return null;
    }
  }

  render() {
    return (this.props.currentUser ? (
      <div>
        <br></br>
        <h1>{this.getCurrentCourseName()}</h1>
        <ResourceContainer courseId={parseInt(this.props.match.params.id)}/>
        <PostContainer />
      </div>)
     : <Redirect to="/login" />)
  }

}

const mapStateToProps = state => {
  return {
    courses: state.courses,
  }
}

export default connect(mapStateToProps)(CourseShowPage);

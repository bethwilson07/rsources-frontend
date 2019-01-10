import React from 'react';
import ResourceContainer from './ResourceContainer';
import PostContainer from './PostContainer';
import {connect} from 'react-redux'

class CourseShowPage extends React.Component {

  getCurrentCourseName() {
    if (this.props.courses[0]){
      return this.props.courses.find(c => c.id === parseInt(this.props.match.params.id)).name;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.getCurrentCourseName()}</h1>
        <ResourceContainer />
        <PostContainer />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    courses: state.courses,
  }
}

export default connect(mapStateToProps)(CourseShowPage);

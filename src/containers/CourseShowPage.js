import React from 'react';
import ResourceContainer from './ResourceContainer';
import PostContainer from './PostContainer';
import {fetchingCourses} from '../redux/actions'
import {connect} from 'react-redux'
import {Breadcrumb, Container, Segment, Header} from 'semantic-ui-react'
import {Redirect, NavLink} from 'react-router-dom'

class CourseShowPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingCourses());
  }

  getCurrentCourse() {
    if (this.props.courses[0]){
      return this.props.courses.find(c => c.id === parseInt(this.props.match.params.id))
    } else {
      return null;
    }
  }

  getCurrentSubject() {
    if(this.props.courses[0]){
      return this.props.courses.find(c => c.id === parseInt(this.props.match.params.id)).subject
    }else {
      return null;
    }
  }

  render() {
    console.log(this.props)
    return (this.props.currentUser ? (
      <div>
        <Breadcrumb>
          <Breadcrumb.Section as={NavLink} to="/home">Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section as={NavLink} to={`/subject/${this.getCurrentSubject().id}`}>
            {this.getCurrentSubject().name}</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section>{this.getCurrentCourse().name}</Breadcrumb.Section>
        </Breadcrumb>
        <br></br>
        <h1>{this.getCurrentCourse().name}</h1>
        <ResourceContainer courseId={parseInt(this.props.match.params.id)}/>
        <Container textAlign="center">
          <Header as="h3">{`${this.getCurrentCourse().name} Forum`}</Header>
        <PostContainer match={this.props.match} currentUser={this.props.currentUser}/>
        </Container>
        <div className="footer">
          <Segment inverted color="black">
          copyright 2019 Rsources
          </Segment>
        </div>
      </div>)
     : <Redirect to="/login" />)
  }

}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    subjects: state.courses
  }
}

export default connect(mapStateToProps)(CourseShowPage);

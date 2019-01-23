import React from 'react';
import Resource from '../components/Resource'
import NewResourceForm from '../components/NewResourceForm'
import {Breadcrumb, Image, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingResources, fetchingCourses} from '../redux/actions'
import {Redirect, NavLink, withRouter} from 'react-router-dom'

class FilteredCoursePage extends React.Component {

  componentDidMount() {
    if(this.props.courses.length === 0 && this.props.resources.length === 0) {
      this.props.dispatch(fetchingResources());
      this.props.dispatch(fetchingCourses())
    }
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

  filterResources(rType) {
    let courseId = parseInt(this.props.match.params.id)
    if(this.props.resources) {
      return this.props.resources.filter(r => r.course_id === courseId)
    } else {
        return null;
    }
  }

  getTypeOfResource() {
    let urlName = this.props.match.params.name
    return this.filterResources().filter(r => r.resource_type === urlName)
  }

  makePageTitle(urlName) {
    switch (urlName) {
      case ("Project"):
        return "Projects";
      case ("Review_Activity"):
        return "Review Activities";
      case ("Lab"):
        return "Labs";
      case ("Field_Trip_Idea"):
        return "Field Trip Ideas";
      case ("Website"):
        return "Helpful Websites";
      default:
        return "Resources";
    }
  }

  render () {
    console.log(this.props)
    return (this.props.currentUser ? (
      <div className="filtered page">
        <br></br>
        <Breadcrumb>
          <Breadcrumb.Section as={NavLink} to="/home">Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section as={NavLink} to={`/subject/${this.getCurrentSubject().id}`}>
            {this.getCurrentSubject().name}</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section as={NavLink} to={`/course/${this.getCurrentCourse().id}`}>
            {this.getCurrentCourse().name}</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section>{this.makePageTitle(this.props.match.params.name)}</Breadcrumb.Section>
        </Breadcrumb>
        <br></br>
        <h1>{this.makePageTitle(this.props.match.params.name)}</h1>
        <br></br>
        {this.getTypeOfResource().map(r => <Resource key={r.id} resource={r}/>)}
        <h4>Want to add a {this.props.match.params.name.split("_").join(" ")}?</h4>
        <NewResourceForm
          resource={this.getTypeOfResource()}
          history={this.props.history}
          course={this.getCurrentCourse()}
          type={this.props.match.params.name}
          userId={this.props.currentUser.id}
          courseId={parseInt(this.props.match.params.id)}
          />
        <div className="resources spacing bottom">
          </div>
          <div className="footer">
            <Segment inverted color="black">
            copyright 2019
            <br></br>
            <Image inline size="mini" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5MlQSabEAmq62sTDJhrd4UoFI43GXlvHF5xc4qm1EjKEYiVw"/>
            Rsources
            </Segment>
          </div>
      </div> )
      : <Redirect to="/login" />)
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources,
    courses: state.courses
  }
}

export default withRouter(connect(mapStateToProps)(FilteredCoursePage));

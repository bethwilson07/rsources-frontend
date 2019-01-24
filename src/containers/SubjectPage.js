import React from 'react';
import CourseCard from '../components/CourseCard'
import NewCourseForm from '../components/NewCourseForm'
import {Grid, Card, Image, Segment, Breadcrumb} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingSubjects, fetchingCourses} from '../redux/actions'
import {Redirect, withRouter, Link, NavLink} from 'react-router-dom'

class SubjectPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingSubjects());
    this.props.dispatch(fetchingCourses());
  }

  filterCourses() {
    return this.props.courses.filter(c => c.subject_id === parseInt(this.props.match.params.id))
  }

  getCurrentSubjectPhoto() {
    if (this.props.subjects[0]){
      return this.props.subjects.find(s => s.id === parseInt(this.props.match.params.id)).photo;
    } else {
      return null;
    }
  }

  getCurrentSubjectName() {
    if (this.props.subjects[0]){
      return this.props.subjects.find(s => s.id === parseInt(this.props.match.params.id)).name;
    } else {
      return null;
    }
  }

  getCurrentSubjectId() {
    return parseInt(this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    return (this.props.currentUser ? (
      <div className="subject page">
        <br></br>
        <Breadcrumb>
          <Breadcrumb.Section as={NavLink} to="/home">Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section>{this.getCurrentSubjectName()}</Breadcrumb.Section>
        </Breadcrumb>
        <br></br>
        <h1>{this.getCurrentSubjectName()}</h1>
        <Grid>
          <Grid.Row columns={1}>
            <Card className="subject">
              <Image src={this.getCurrentSubjectPhoto()} className="sub"/>
            </Card>
          </Grid.Row>
          <h2 className="choose">Choose a course to see all of our available resources.</h2>
          <Grid.Row columns={3}>
            {this.filterCourses().map(c => <Link to={`/course/${c.id}`} key={c.id}>
              <CourseCard key={c.id} course={c}/></Link>)}
          </Grid.Row>
        </Grid>
        <h3>Don't see your particular {this.getCurrentSubjectName()} course?</h3>
        <NewCourseForm
          subjectName={this.getCurrentSubjectName()}
          subjectId={this.getCurrentSubjectId()}
          currentUser={this.props.currentUser}
          history={this.props.history}
          />
          <div className="footer">
            <Segment className="footer">
            copyright 2019
            <br></br>
            <Image inline size="mini" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5MlQSabEAmq62sTDJhrd4UoFI43GXlvHF5xc4qm1EjKEYiVw"/>
            Rsources
            </Segment>
          </div>
      </div>)
     : <Redirect to="/login" />)
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    subjects: state.subjects,
  }
}

export default withRouter(connect(mapStateToProps)(SubjectPage));

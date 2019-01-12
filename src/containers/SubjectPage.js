import React from 'react';
import CourseCard from '../components/CourseCard'
import {Grid, Card, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

class SubjectPage extends React.Component {

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

  render() {
    return (
      <div>
        <br></br>
        <h1>{this.getCurrentSubjectName()}</h1>
        <Grid>
          <Grid.Row columns={1}>
            <Card className="subject">
              <Image src={this.getCurrentSubjectPhoto()} className="sub"/>
            </Card>
          </Grid.Row>
          <Grid.Row columns={3}>
            {this.filterCourses().map(c => <Link to={`/course/${c.id}`} key={c.id}>
              <CourseCard key={c.id} course={c}/></Link>)}
          </Grid.Row>
        </Grid>



      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    subjects: state.subjects,
  }
}

export default withRouter(connect(mapStateToProps)(SubjectPage));

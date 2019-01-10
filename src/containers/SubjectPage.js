import React from 'react';
import CourseCard from '../components/CourseCard';
import {Grid, Card, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingCourses} from '../redux/actions'

class SubjectPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingCourses())
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

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={1}>
            <Card className="subject">
              <Image src={this.getCurrentSubjectPhoto()}/>
            </Card>
          </Grid.Row>
          <Grid.Row columns={3}>
            {this.filterCourses().map(c => <CourseCard key={c.id} course={c}/>)}
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

export default connect(mapStateToProps)(SubjectPage);

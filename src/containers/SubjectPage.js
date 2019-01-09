import React from 'react';
import TopNavBar from '../components/TopNavBar';
import SideNavBar from '../components/SideNavBar';
import CourseCard from '../components/CourseCard';
import {connect} from 'react-redux'
import {fetchingCourses} from '../redux/actions'

class SubjectPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingCourses())
  }

  render() {
    return (
      <div>
        <TopNavBar />
        <SideNavBar />
        <CourseCard /><CourseCard /><CourseCard />
      </div>
    )
  }
}

export default connect()(SubjectPage);

import React from 'react';
import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingSubjects, fetchingCourses} from '../redux/actions'
import {withRouter, Link} from 'react-router-dom'

class SideNavBar extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchingSubjects());
      this.props.dispatch(fetchingCourses());
    }

    render () {
      return (
        <div className="sidebar">

          <Menu vertical>
            <Link to={'/home'}><Menu.Item>Home</Menu.Item></Link>
              {this.props.subjects.map(s => <Link to={`/subject/${s.id}`} key={s.id}><Menu.Item key={s.id}>{s.name}</Menu.Item></Link>)}
            <Menu.Item></Menu.Item>
          </Menu>

        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    subjects: state.subjects,
  }
}

export default withRouter(connect(mapStateToProps)(SideNavBar));

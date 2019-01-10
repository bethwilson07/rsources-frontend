import React from 'react';
import {Menu} from 'semantic-ui-react'
import SubjectPage from '../containers/SubjectPage'
import {connect} from 'react-redux'
import {fetchingSubjects} from '../redux/actions'
import {Route, Link} from 'react-router-dom'

class SideNavBar extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchingSubjects())
    }

    render () {
      return (
        <div className="sidebar">
          <Menu vertical>
            <Link to={'/home'}><Menu.Item>Home</Menu.Item></Link>
              {this.props.subjects.map(s => <Link to={`/subject/${s.id}`} key={s.id}><Menu.Item>{s.name}</Menu.Item></Link>)}
            <Menu.Item></Menu.Item>
          </Menu>

          <Route exact path={`/subject/:id`} render ={() => {
            return ( <SubjectPage />)
            }} />

        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    subjects: state.subjects,
  }
}

export default connect(mapStateToProps)(SideNavBar);

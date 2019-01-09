import React from 'react';
import {connect} from 'react-redux'
import {fetchingSubjects} from '../redux/actions'

class SideNavBar extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingSubjects())
  }

  render() {
    return (
      <div>
        SideNavBar
      </div>
    )
  }
}

export default connect()(SideNavBar);

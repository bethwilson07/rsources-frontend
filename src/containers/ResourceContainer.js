import React from 'react';
import ResourceCard from '../components/ResourceCard';
import {connect} from 'react-redux'
import {fetchingResources} from '../redux/actions'

class ResourceContainer extends React.Component {

  componentDidMount() {
    let action = fetchingResources()
    this.props.dispatch(action)
  }

  render() {
    return (
      <div>
        <ResourceCard />
        <ResourceCard />
      </div>
    )
  }
}

export default connect()(ResourceContainer);

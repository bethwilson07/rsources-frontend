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
        {this.props.resources.map(r => <ResourceCard key={r.id} resource={r}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources,
  }
}

export default connect(mapStateToProps)(ResourceContainer);

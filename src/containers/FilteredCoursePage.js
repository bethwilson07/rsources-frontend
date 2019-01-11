import React from 'react';
import Resource from '../components/Resource'
import NewResourceForm from '../components/NewResourceForm'
import {connect} from 'react-redux'
import {fetchingResources} from '../redux/actions'

class FilteredCoursePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingResources())
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
    return (
      <div>
        <h1 className="title">{this.makePageTitle(this.props.match.params.name)}</h1>
        {this.getTypeOfResource().map(r => <Resource key={r.id} resource={r}/>)}
        <NewResourceForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

export default connect(mapStateToProps)(FilteredCoursePage);

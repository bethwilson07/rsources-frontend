import React from 'react';
import ResourceCard from '../components/ResourceCard';
import {connect} from 'react-redux'
import {fetchingResources} from '../redux/actions'
import {Grid} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

class ResourceContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchingResources())
  }

  resourceTypes() {
    const types = [{name:"Project Ideas", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {name:"Review Activities", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {name: "Labs", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {name: "Field Trip Ideas", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {name: "Helpful Websites", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"}]
    return types;
  }

  filterResources(rType) {
    if(this.props.resources) {
      let filteredResources = this.props.resources.filter(r => r.course_id === this.props.courseId)

        switch (rType) {
          case (rType.includes("Project")):
            return filteredResources.filter(r => r.resource_type === "Project")
          default:
            return null;
        }

    } else {
        return null;
    }
  }

  render() {
    console.log(this.props.resources ? this.filterResources("Project Ideas") : null)
    return (
      <div>
        <Grid>
          <Grid.Row className="sources" columns={3}>
            {this.resourceTypes().map((t, index) => <Link to={`/course/resources/${t.name}`}>
            <ResourceCard key={t.index} name={t.name} photo={t.photo}/></Link>)}
          </Grid.Row>
        </Grid>

        

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources,
  }
}

export default withRouter(connect(mapStateToProps)(ResourceContainer));

//console.log(this.props.resources.filter(r => r.course_id === this.props.courseId).filter(r => r.resource_type === "Project"))

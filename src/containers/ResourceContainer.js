import React from 'react';
import ResourceCard from '../components/ResourceCard';
import {Grid} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

class ResourceContainer extends React.Component {

  resourceTypes() {
    const types = [{id: 1, name:"Project", title:"Project Ideas", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {id: 2, name: "Review_Activity", title: "Review Activities", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {id: 3, name: "Lab", title: "Labs", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {id: 4, name: "Field_Trip_Idea", title: "Field Trip Ideas", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"},
    {id: 5, name: "Website", title: "Helpful Websites", photo: "http://icons-for-free.com/free-icons/png/512/2315596.png"}]
    return types;
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row className="sources" columns={3}>
            {this.resourceTypes().map(t => <Link to={`/course/${this.props.courseId}/resources/${t.name}`} key={t.id} >
            <ResourceCard key={t.id} title={t.title} photo={t.photo}/></Link>)}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}


export default withRouter(ResourceContainer);

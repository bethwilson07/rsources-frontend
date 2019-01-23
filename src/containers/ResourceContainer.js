import React from 'react';
import ResourceCard from '../components/ResourceCard';
import {Grid} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

class ResourceContainer extends React.Component {

  resourceTypes() {
    const types = [{id: 1, name:"Project", title:"Project Ideas", photo: "https://i.pinimg.com/originals/11/ad/65/11ad6535313c4c197dfa9ff711866641.png"},
    {id: 2, name: "Review_Activity", title: "Review Activities", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSb8sKPHBk7x5qFSXwW_Wf4vEZGBq9QqWEtxECSr3sjwdbZMdP"},
    {id: 3, name: "Lab", title: "Labs", photo: "https://cdn.dribbble.com/users/143127/screenshots/2460438/january-15.png"},
    {id: 4, name: "Field_Trip_Idea", title: "Field Trip Ideas", photo: "https://safewaybus.files.wordpress.com/2012/12/school-bus-clip-art-21.jpg"},
    {id: 5, name: "Website", title: "Helpful Websites", photo: "http://worldartsme.com/images/cartoon-laptop-computer-clipart-1.jpg"}]
    return types;
  }

  render() {
    return (
      <div>
        <Grid className="container">
          <Grid.Row className="sources" columns={3}>
            {this.resourceTypes().map(t => <Link to={`/course/${this.props.courseId}/resources/${t.name}`} key={t.id} >
            <ResourceCard key={t.id} title={t.title} photo={t.photo}/></Link>).slice(0,3)}
          </Grid.Row>
          <Grid.Row className="sources" columns={2}>
            {this.resourceTypes().map(t => <Link to={`/course/${this.props.courseId}/resources/${t.name}`} key={t.id} >
            <ResourceCard key={t.id} title={t.title} photo={t.photo}/></Link>).slice(3)}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}


export default withRouter(ResourceContainer);

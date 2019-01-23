import React from 'react';
import {Card, Image} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

const Resource =(props) => {
  return (
    <div>
      <Card className="links">
        <Image className="small" size="small" src={props.resource.photo}/>
        <Link to={`/resource/show/${props.resource.id}`}>{props.resource.name}</Link>
      </Card>
    </div>
  )
}

export default withRouter(Resource);

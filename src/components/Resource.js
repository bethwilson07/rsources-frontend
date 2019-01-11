import React from 'react';
import {Card} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

const Resource =(props) => {
  return (
    <div>
      <Card className="links">
        <Link to={`/resource/show/${props.resource.id}`}>{props.resource.name}</Link>
      </Card>
    </div>
  )
}

export default withRouter(Resource);

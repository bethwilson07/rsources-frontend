import React from 'react';
import {Card, Image} from 'semantic-ui-react'

const ResourceCard =(props) => {
  return (
    <div>
      <Card className="res">
        <Image src={props.photo} className="resource"/>
        <Card.Content className="restitle">{props.title}</Card.Content>
      </Card>
    </div>
  )
}

export default ResourceCard;

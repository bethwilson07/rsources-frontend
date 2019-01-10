import React from 'react';
import {Card} from 'semantic-ui-react'

const CourseCard =(props) => {

  return (
    <div>
      <Card className="course">
        <Card.Content>{props.course.name}</Card.Content>
      </Card>
    </div>
  )
}

export default CourseCard;

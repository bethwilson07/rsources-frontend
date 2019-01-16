import React from 'react';
import {Segment, Button} from 'semantic-ui-react'

const PostBox =(props) => {
  return (
    <div>
      <Segment>
        {props.content}
      </Segment>
      <Button>Reply</Button>
    </div>
  )
}

export default PostBox;

import React, {Fragment} from 'react';
import {Feed, Button} from 'semantic-ui-react'

const PostBox =(props) => {
  return (
    <Fragment>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>{props.post.user.username}</Feed.User>
          <Feed.Extra text>
            {props.post.content}
           </Feed.Extra>
          <Button compact>Reply</Button>
        </Feed.Summary>
      </Feed.Content>
    </Fragment>
    )
}

export default PostBox;

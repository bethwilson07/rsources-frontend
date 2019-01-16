import React, {Fragment} from 'react';
import {Feed, Button} from 'semantic-ui-react'

class CommentBox extends React.Component {

  render() {
    return (
      <Fragment>
        <Feed>
          <Feed.Event className="comment">
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{this.props.comment.user.username}</Feed.User>
                <Feed.Extra text>
                  {this.props.comment.content}
                 </Feed.Extra>
                {this.props.currentUser.id === this.props.comment.user_id ? <Button control="button">Edit</Button> : null}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Fragment>
    )
  }
}

export default CommentBox;

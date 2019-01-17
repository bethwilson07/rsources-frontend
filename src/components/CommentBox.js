import React, {Fragment} from 'react';
import {Feed} from 'semantic-ui-react';
import EditCommentForm from "./EditCommentForm"

class CommentBox extends React.Component {

  render() {
    return (
      <Fragment>
        <Feed>
          <Feed.Event className="comment">
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{this.props.comment.user.username}</Feed.User>
                <Feed.Date>{this.props.currentUser.id === this.props.comment.user_id ? <EditCommentForm currentUser={this.props.currentUser} comment={this.props.comment}/> : null}</Feed.Date>
                <Feed.Extra text>
                  {this.props.comment.content}
                 </Feed.Extra>

              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Fragment>
    )
  }
}

export default CommentBox;

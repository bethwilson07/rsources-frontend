import React, {Fragment} from 'react';
import {Segment, Feed, Button} from 'semantic-ui-react'
import CommentBox from './CommentBox'
import {connect} from 'react-redux'
import {fetchingComments} from '../redux/actions'

class PostBox extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchingComments())
  }

  getComments () {
    return this.props.comments.filter(c => c.post_id === this.props.post.id)
  }

  render () {
  return (
    <Fragment>
      <Segment.Group textAlign="center" padded="very">
        <Feed>
          <Feed.Event className="post">
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{this.props.post.user.username}</Feed.User>
                <Feed.Extra text>
                  {this.props.post.content}
                 </Feed.Extra>
                <Button>Reply</Button>
                {this.props.currentUser.id === this.props.post.user_id ? <Button control="button">Edit</Button> : null}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          <Segment.Group textAlign="center">
            Comments:
            <Segment>{this.getComments().map(c => <CommentBox key={c.id} comment={c} currentUser={this.props.currentUser} />)}</Segment>
          </Segment.Group>
        </Feed>
      </Segment.Group>
    </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
export default connect(mapStateToProps)(PostBox);

import React, {Fragment} from 'react';
import {Segment, Image, Icon, Feed} from 'semantic-ui-react'
import CommentBox from './CommentBox'
import EditPostForm from './EditPostForm'
import NewCommentForm from './NewCommentForm'
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
      <Segment.Group className="post box">
        <Feed>
          <Feed.Event className="post">
            <Feed.Label>
              <Image src="http://www.hisdcareerreadiness.org/wp-content/uploads/2015/07/icon-stem-L.png" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{this.props.post.user.username}</Feed.User>
                <Feed.Date>{this.props.currentUser.id === this.props.post.user_id ? <EditPostForm currentUser={this.props.currentUser} post={this.props.post}/> : null}</Feed.Date>
                <Feed.Extra text>
                  {this.props.post.content}
                 </Feed.Extra>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
            <Icon name="comments outline"/>Comments
            <Segment className="comment box">{this.getComments().map(c => <CommentBox key={c.id} comment={c} currentUser={this.props.currentUser} />)}</Segment>
            <NewCommentForm currentUser={this.props.currentUser} post={this.props.post}/>
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

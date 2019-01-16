import React, {Fragment} from 'react';
import PostBox from '../components/PostBox'
import NewPostForm from '../components/NewPostForm';
import {connect} from 'react-redux'
import {fetchingPosts, fetchingComments} from '../redux/actions'
import {Feed, Header} from 'semantic-ui-react'


class PostContainer extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchingPosts());
    this.props.dispatch(fetchingComments());
  }

  getCoursePosts () {
    return this.props.posts.filter(p => p.course_id === parseInt(this.props.match.params.id))
  }

  render() {
    console.log(this.getCoursePosts())
    return (
      <Fragment>
        <Header as="h3">POST FEED</Header>
        <NewPostForm currentUser={this.props.currentUser} courseId={parseInt(this.props.match.params.id)}/>
        <Feed>
          <Feed.Event className="post">
            {this.getCoursePosts() ? this.getCoursePosts().map(p => <PostBox key={p.id} post={p}/>) : null}
          </Feed.Event>
        </Feed>

      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(PostContainer);

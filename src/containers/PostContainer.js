import React from 'react';
import PostBox from '../components/PostBox'
import NewPostForm from '../components/NewPostForm';
import {connect} from 'react-redux'
import {fetchingPosts} from '../redux/actions'
import {Container, Header} from 'semantic-ui-react'


class PostContainer extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchingPosts())
  }

  getCoursePosts () {
    return this.props.posts.filter(p => p.course_id === parseInt(this.props.match.params.id))
  }

  render() {
    console.log(this.props.comments)
    return (
      <Container textAlign="center">
        <Header as="h3">POST FEED</Header>
        <NewPostForm currentUser={this.props.currentUser} courseId={parseInt(this.props.match.params.id)}/>
        <Container>
          {this.getCoursePosts() ? this.getCoursePosts().map(p => <PostBox
              key={p.id} post={p} currentUser={this.props.currentUser}/>) : null}
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostContainer);

import React, {Fragment} from 'react';
import PostBox from '../components/PostBox'
import NewPostForm from '../components/NewPostForm';
import {connect} from 'react-redux'
import {fetchingPosts} from '../redux/actions'
import {Grid} from 'semantic-ui-react'


class PostContainer extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchingPosts())
  }

  getCoursePosts () {
    return this.props.posts.filter(p => p.course_id === parseInt(this.props.match.params.id))
  }

  render() {
    return (
      <Fragment>
        <NewPostForm currentUser={this.props.currentUser} courseId={parseInt(this.props.match.params.id)}/>
        <Grid columns={1} textAlign='center'>
          <Grid.Column>
              {this.getCoursePosts() ? this.getCoursePosts().map(p => <PostBox
                  key={p.id} post={p} currentUser={this.props.currentUser}/>) : null}
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostContainer);

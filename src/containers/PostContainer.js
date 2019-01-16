import React from 'react';
import PostBox from '../components/PostBox'
import NewPostForm from '../components/NewPostForm';
import {connect} from 'react-redux'
import {fetchingPosts, fetchingComments} from '../redux/actions'


class PostContainer extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchingPosts());
    this.props.dispatch(fetchingComments());
  }

  render() {
    return (
      <div>
        {this.props.posts.map(p => <PostBox key={p.id} post={p}/>)}
        <NewPostForm />
      </div>
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

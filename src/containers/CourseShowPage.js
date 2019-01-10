import React from 'react';
import ResourceContainer from './ResourceContainer';
import PostContainer from './PostContainer';
import {connect} from 'react-redux'

const CourseShowPage =(props) => {

    return (
      <div>
        <ResourceContainer />
        <PostContainer />
      </div>
    )

}


export default connect()(CourseShowPage);

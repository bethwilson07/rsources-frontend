import React from 'react';
import TopNavBar from '../components/TopNavBar';
import SideNavBar from '../components/SideNavBar';
import ResourceContainer from './ResourceContainer';
import PostContainer from './PostContainer';


const CourseShowPage =() => {
  return (
    <div>
      <ResourceContainer />
      <PostContainer />
    </div>
  )
}

export default CourseShowPage;

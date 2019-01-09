import React from 'react';
import TopNavBar from '../components/TopNavBar';
import SideNavBar from '../components/SideNavBar';
import CourseCard from '../components/CourseCard';

const SubjectPage =() => {
  return (
    <div>
      <TopNavBar />
      <SideNavBar />
      <CourseCard /><CourseCard /><CourseCard />
    </div>
  )
}

export default SubjectPage;

import React from 'react';
import HomePage from './HomePage'
import SubjectPage from './SubjectPage'
import CourseShowPage from './CourseShowPage'
import FilteredCoursePage from './FilteredCoursePage'
import ResourceShowPage from './ResourceShowPage'

const EveryOtherComponent =() => {
  return (
    <div>
      <HomePage />
      <SubjectPage />
      <CourseShowPage />
      <FilteredCoursePage />
      <ResourceShowPage />
    </div>
  )
}

export default EveryOtherComponent;

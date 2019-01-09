import React, { Component } from 'react';
import TopNavBar from '../components/TopNavBar'
import SideNavBar from '../components/SideNavBar'
import Resource from '../components/Resource'
import NewResourceForm from '../components/NewResourceForm'

const FilteredCoursePage =() => {
  return (
    <div>
      <TopNavBar />
      <SideNavBar />
      <Resource />
      <Resource />
      <NewResourceForm />
    </div>
  )
}

export default FilteredCoursePage;

const fetchedSubjects = (subjects) => {
  return {type: "FETCHED_SUBJECTS", subjects}
}

const fetchingSubjects = () => {
  return (dispatch) => {
    dispatch(loadingData())
    fetch("http://localhost:3000/subjects")
    .then(res => res.json())
    .then(subjects => {
      dispatch(fetchedSubjects(subjects))
    })
  }
}

//////////////////////////////

const fetchedCourses = (courses) => {
  return {type: "FETCHED_COURSES", courses}
}

const fetchingCourses = () => {
  return (dispatch) => {
    dispatch(loadingData())
    fetch("http://localhost:3000/courses")
    .then(res => res.json())
    .then(courses  => {
      dispatch(fetchedCourses(courses))
    })
  }
}

/////////////////////////////////////

const fetchedResources = (resources) => {
  return {type: "FETCHED_RESOURCES", resources}
}

const loadingData = () => {
  return {type: "LOADING_DATA"}
}

const fetchingResources = () => {
  return (dispatch) => {
    dispatch(loadingData())
    fetch("http://localhost:3000/resources")
    .then(res => res.json())
    .then(resources => {
      dispatch(fetchedResources(resources))
    })
  }
}



export {fetchingSubjects, fetchingCourses, fetchingResources};

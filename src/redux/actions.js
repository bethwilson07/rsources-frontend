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

///////////////////////////////////////////

const addCourse = (course) => {
  return {type: "ADD_COURSE", course}
}

const addingCourse = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/courses`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newCourse => {
      dispatch(addCourse(newCourse))
    })
  }
}

///////////////////////////////////////////////////

const addResource = (resource) => {
  return {type:"ADD_RESOURCE", resource}
}

const postingResource = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/resources", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res=>res.json())
      .then(newResource => {
        dispatch(addResource(newResource))
      })
  }
}

//////////////////////////////////////////////////

const updateResource = (resource) => {
  return {type: "UPDATE_RESOURCE", resource}
}

const updatingResource =(data, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/resources/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(newResource => {
      dispatch(updateResource(newResource))
    })
  }
}

/////////////////////////////////////////////////

const deleteResource = (resource) => {
  return {type: "DELETE_RESOURCE", resource}
}

const deletingResource = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/resources/${id}`, {
      method: "DELETE"})
      .then(res => res.json())
      .then(resource => {
        dispatch(deleteResource(resource))
      })
  }
}

export {fetchingSubjects, fetchingCourses, fetchingResources, addingCourse, postingResource, updatingResource, deletingResource};

//////////////NASA/////////////////////////

const fetchedNasa = (nasa) => {
  return {type: "NASA_APOD", nasa}
}

const fetchingNasa = () => {
  return (dispatch) => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=vhvO5hX7Qlfnix7wsObVQTgK4tTNKNReGsph6L6o")
      .then(res=> res.json())
      .then(data => {
        dispatch(fetchedNasa(data))
      })
  }
}

//////////////Subjects/////////////////////

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

///////////Courses////////////////////

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

////////////////Resources//////////////////

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

const addResource = (resource) => {
  return {type:"ADD_RESOURCE", resource}
}

const postingResource = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

////////////////POSTS///////////////////

const fetchedPosts = (posts) => {
  return {type: "FETCHED_POSTS", posts}
}

const fetchingPosts = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => {
      dispatch(fetchedPosts(posts))
    })
  }
}

const addPost = (post) => {
  return {type: "ADD_POST", post}
}

const addingPost = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newPost => {
      dispatch(addPost(newPost))
    })
  }
}

const updatePost = (post) => {
  return {type: "UPDATE_POST", post}
}

const updatingPost = (data, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(post => {
      dispatch(updatePost(post))
    })
  }
}

const deletePost = (post) => {
  return {type: "DELETE_POST", post}
}

const deletingPost = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"})
      .then(res => res.json())
      .then(post => {
        dispatch(deletePost(post))
      })
  }
}


///////////////COMMENTS//////////////////

const fetchedComments = (comments) => {
  return {type: "FETCHED_COMMENTS", comments}
}

const fetchingComments = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/comments")
    .then(res => res.json())
    .then(comments => {
      dispatch(fetchedComments(comments))
    })
  }
}

const addComment = (comment) => {
  return {type: "ADD_COMMENT", comment}
}

const addingComment = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/comments`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newComment => {
      dispatch(addComment(newComment))
    })
  }
}

const updateComment = (comment) => {
  return {type: "UPDATE_COMMENT", comment}
}

const updatingComment = (data, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(comment => {
      dispatch(updateComment(comment))
    })
  }
}

const deleteComment = (comment) => {
  return {type: "DELETE_COMMENT", comment}
}

const deletingComment = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE"})
      .then(res => res.json())
      .then(comment => {
        dispatch(deleteComment(comment))
      })
  }
}

export {fetchingNasa, fetchingSubjects, fetchingCourses, fetchingResources, addingCourse,
  postingResource, updatingResource, deletingResource,
  fetchingPosts, fetchingComments, addingPost, addingComment, updatingPost, deletingPost, updatingComment, deletingComment};

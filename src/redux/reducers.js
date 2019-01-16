import { combineReducers } from "redux";

const subjectsReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_SUBJECTS":
      return action.subjects
    default:
      return state;
  }
}

const coursesReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_COURSES":
      return action.courses
    case "ADD_COURSE":
      return [...state, action.course]
    case "ADD_RESOURCE":
        return state.map(c => {
          if (c.id === action.resource.course_id) {
            return {...c, resources: [...c.resources, action.resource]}
          } else {
            return c
          }
        })
      case "DELETE_RESOURCE":
        return state.map(c => {
          if (c.id === action.resource.course_id) {
            return {...c, resources:
              [...c.resources.slice(0, c.resources.indexOf(action.resource)), ...c.resources.slice(c.resources.indexOf(action.resource) + 1)]}
          } else {
            return c
          }
        })
    default:
      return state;
  }
}

const resourcesReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_RESOURCES":
      return action.resources;
    case "ADD_RESOURCE":
      return [...state, action.resource]
    case "UPDATE_RESOURCE":
      return state.map(r => {
       if (r.id === action.resource.id) {
         return action.resource;
       } else {
         return r;
       }
     })
    case "DELETE_RESOURCE":
      return state.filter(r => r.id !== action.resource.id)
    default:
      return state;
  }
}

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_POSTS":
      return action.posts
    case "ADD_POST":
      return [...state, action.post]
    default:
      return state;
  }
}

const commentsReducer = (state =[], action) => {
  switch(action.type) {
    case "FETCHED_COMMENTS":
      return action.comments
    case "ADD_COMMENT":
      return [...state, action.comment]
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  subjects: subjectsReducer,
  courses: coursesReducer,
  resources: resourcesReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;

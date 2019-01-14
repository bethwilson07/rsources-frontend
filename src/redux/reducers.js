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
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  subjects: subjectsReducer,
  courses: coursesReducer,
  resources: resourcesReducer
});

export default rootReducer;

import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED
} from "store/actionTypes";

const iS = {
  fulfilled: false,
  fetching: false,
  rejected: false,
  data: []
};

const projects = (state = iS, action) => {
  switch (action.type) {
    case PROJECTS_FETCHING: {
      return Object.assign({}, state, { fetching: true });
    }
    case PROJECTS_FULFILLED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        data: action.payload.data
      });
    }
    case PROJECTS_REJECTED: {
      return Object.assign({}, state, {
        fulfilled: false,
        fetching: false,
        rejected: true
      });
    }
    default:
      return state;
  }
};

export default projects;

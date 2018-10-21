import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED,
  PROJECT_DETAILS_FETCHING,
  PROJECT_DETAILS_FULFILLED,
  PROJECT_DETAILS_REJECTED
} from "store/actionTypes";

const iS = {
  projectsFulfilled: false,
  projectsFetching: false,
  projectsRejected: false,
  projectDetailsFulfilled: false,
  projectDetailsFetching: false,
  projectDetailsRejected: false,
  detailData: {},
  data: []
};

const projects = (state = iS, action) => {
  switch (action.type) {
    /**
     * ALL PROJECTS
     */
    case PROJECTS_FETCHING: {
      return Object.assign({}, state, { projectsFetching: true });
    }
    case PROJECTS_FULFILLED: {
      return Object.assign({}, state, {
        projectsFulfilled: true,
        projectsFetching: false,
        data: action.payload
      });
    }
    case PROJECTS_REJECTED: {
      return Object.assign({}, state, {
        projectsFulfilled: false,
        projectsFetching: false,
        projectsRejected: true
      });
    }
    /**
     * SINGLE PROJECT
     */
    case PROJECT_DETAILS_FETCHING: {
      return Object.assign({}, state, { projectDetailsFetching: true });
    }
    case PROJECT_DETAILS_FULFILLED: {
      return Object.assign({}, state, {
        projectDetailsFulfilled: true,
        projectDetailsFetching: false,
        projectDetailsRejected: false,
        detailData: action.payload
      });
    }
    case PROJECT_DETAILS_REJECTED: {
      return Object.assign({}, state, {
        projectDetailsFulfilled: false,
        projectDetailsFetching: false,
        projectDetailsRejected: true
      });
    }
    default:
      return state;
  }
};

export default projects;

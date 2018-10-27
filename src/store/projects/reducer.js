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
  pageNotFound: false,
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
      return Object.assign({}, state, {
        projectsFetching: true,
        pageNotFound: false
      });
    }
    case PROJECTS_FULFILLED: {
      return Object.assign({}, state, {
        projectsFulfilled: true,
        projectsFetching: false,
        pageNotFound: false,
        data: action.payload
      });
    }
    case PROJECTS_REJECTED: {
      return Object.assign({}, state, {
        projectsFulfilled: false,
        projectsFetching: false,
        pageNotFound: true,
        projectsRejected: true
      });
    }
    /**
     * SINGLE PROJECT
     */
    case PROJECT_DETAILS_FETCHING: {
      return Object.assign({}, state, {
        projectDetailsFetching: true,
        pageNotFound: false
      });
    }
    case PROJECT_DETAILS_FULFILLED: {
      return Object.assign({}, state, {
        projectDetailsFulfilled: true,
        projectDetailsFetching: false,
        projectDetailsRejected: false,
        pageNotFound: false,
        detailData: action.payload
      });
    }
    case PROJECT_DETAILS_REJECTED: {
      return Object.assign({}, state, {
        projectDetailsFulfilled: false,
        projectDetailsFetching: false,
        pageNotFound: true,
        projectDetailsRejected: true
      });
    }
    default:
      return state;
  }
};

export default projects;

import asyncRequest from "utils/network/asyncRequest";

import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED,
  PROJECT_DETAILS_FETCHING,
  PROJECT_DETAILS_FULFILLED,
  PROJECT_DETAILS_REJECTED
} from "store/actionTypes";

import { PROJECTS_ROUTE, PROJECT_DETAILS_ROUTE } from "router/routes";

//////////////////////////////////////////////////
/**
 * ALL PROJECTS
 */
//////////////////////////////////////////////////
export const clientSideFetchProjects = () => {
  return function(dispatch) {
    dispatch({ type: PROJECTS_FETCHING });
    asyncRequest
      .get(PROJECTS_ROUTE.apiPath)
      .then(({ data }) => {
        dispatch({ type: PROJECTS_FULFILLED, payload: data.data });
      })
      .catch(err => {
        dispatch({ type: PROJECTS_REJECTED, payload: err });
      });
  };
};

export const serverSideFetchProjects = store => {
  return asyncRequest
    .get(PROJECTS_ROUTE.apiPath)
    .then(({ data }) => {
      store.dispatch({ type: PROJECTS_FULFILLED, payload: data.data });
      return store;
    })
    .catch(err => {
      store.dispatch({ type: PROJECTS_REJECTED, payload: err });
      return store;
    });
};

//////////////////////////////////////////////////
/**
 * SINGLE PROJECT
 */
//////////////////////////////////////////////////
export const clientSideFetchProjectDetails = slug => {
  console.log(slug, " <-- slug");

  return function(dispatch) {
    dispatch({ type: PROJECT_DETAILS_FETCHING });
    asyncRequest
      .get(`${PROJECT_DETAILS_ROUTE.apiPath}/${slug}/`)
      .then(({ data }) => {
        dispatch({ type: PROJECT_DETAILS_FULFILLED, payload: data.data });
      })
      .catch(err => {
        dispatch({ type: PROJECT_DETAILS_REJECTED, payload: err });
      });
  };
};

export const serverSideFetchProjectDetails = ({ store, slug }) => {
  return asyncRequest
    .get(`${PROJECT_DETAILS_ROUTE.apiPath}/${slug}/`)
    .then(({ data }) => {
      store.dispatch({ type: PROJECT_DETAILS_FULFILLED, payload: data.data });
      return store;
    })
    .catch(err => {
      store.dispatch({ type: PROJECT_DETAILS_FULFILLED, payload: err });
      return store;
    });
};

// Project is already present in store
export const projectDetailsFromStore = project => ({
  type: PROJECT_DETAILS_FULFILLED,
  payload: project
});

export default clientSideFetchProjects;

import asyncRequest from "utils/network/asyncRequest";

import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED
} from "store/actionTypes";

import { PROJECTS_ROUTE } from "router/routes";

export function clientSideFetchProjects() {
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
}

export function serverSideFetchProjects(store) {
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
}

export default clientSideFetchProjects;

import asyncRequest from "utils/network/asyncRequest";

import {
  EXPERIENCES_FETCHING,
  EXPERIENCES_FULFILLED,
  EXPERIENCES_REJECTED
} from "store/actionTypes";

import { EXPERIENCES_ROUTE } from "router/routes";

export function clientSideFetchExperiences() {
  return dispatch => {
    dispatch({ type: EXPERIENCES_FETCHING });
    asyncRequest
      .get(EXPERIENCES_ROUTE.apiPath)
      .then(({ data }) => {
        dispatch({ type: EXPERIENCES_FULFILLED, payload: data.data });
      })
      .catch(err => {
        dispatch({ type: EXPERIENCES_REJECTED, payload: err });
      });
  };
}

export function serverSideFetchExperiences(store) {
  return asyncRequest
    .get(EXPERIENCES_ROUTE.apiPath)
    .then(({ data }) => {
      store.dispatch({ type: EXPERIENCES_FULFILLED, payload: data.data });
      return store;
    })
    .catch(err => {
      store.dispatch({ type: EXPERIENCES_REJECTED, payload: err });
      return store;
    });
}

export default clientSideFetchExperiences;

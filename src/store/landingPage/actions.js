import asyncRequest from "utils/network/asyncRequest";

import {
  LANDINGPAGE_FETCHING,
  LANDINGPAGE_FULFILLED,
  LANDINGPAGE_REJECTED
} from "store/actionTypes";

import { LANDING_ROUTE } from "router/routes";

export function clientSideFetchLandingPage() {
  return function(dispatch) {
    dispatch({ type: LANDINGPAGE_FETCHING });
    asyncRequest
      .get(LANDING_ROUTE.apiPath)
      .then(({ data }) => {
        dispatch({ type: LANDINGPAGE_FULFILLED, payload: data });
      })
      .catch(err => {
        dispatch({ type: LANDINGPAGE_REJECTED, payload: err });
      });
  };
}

export function serverSideFetchLandingPage(store) {
  return asyncRequest
    .get(LANDING_ROUTE.apiPath)
    .then(({ data }) => {
      store.dispatch({ type: LANDINGPAGE_FULFILLED, payload: data.data });
      return store;
    })
    .catch(err => {
      store.dispatch({ type: LANDINGPAGE_REJECTED, payload: err });
      return store;
    });
}

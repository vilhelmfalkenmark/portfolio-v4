import axios from "axios";

import { FAQ_FULFILLED, FAQ_REJECTED, FAQ_FETCHING } from "store/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchFaq() {
  return function(dispatch) {
    dispatch({ type: FAQ_FETCHING });
    axios
      .get(`${apiBase}/faq/`)
      .then(response => {
        dispatch({ type: FAQ_FULFILLED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FAQ_REJECTED, payload: err });
      });
  };
}

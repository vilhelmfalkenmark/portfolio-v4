import axios from "axios";
import {
  INSTAGRAM_FULFILLED,
  INSTAGRAM_REJECTED,
  INSTAGRAM_FETCHING
} from "store/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchInstagram() {
  return function(dispatch) {
    dispatch({ type: INSTAGRAM_FETCHING });
    axios
      .get(`${apiBase}/instagram/`)
      .then(response => {
        dispatch({ type: INSTAGRAM_FULFILLED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: INSTAGRAM_REJECTED, payload: err });
      });
  };
}

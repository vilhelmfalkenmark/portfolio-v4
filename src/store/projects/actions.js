import axios from "axios";

import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED
} from "store/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchProjects() {
  return function(dispatch) {
    dispatch({ type: PROJECTS_FETCHING });
    axios
      .get(`${apiBase}/projects/`)
      .then(response => {
        dispatch({ type: PROJECTS_FULFILLED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: PROJECTS_REJECTED, payload: err });
      });
  };
}

// export function fetchGuest(guestId) {
//   return function(dispatch) {
//     dispatch({ type: GUEST_FETCHING });
//     axios
//       .get(`${apiBase}/guests/${guestId}`)
//       .then(response => {
//         dispatch({ type: GUEST_FETCHED, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: GUEST_FETCHING_ERROR, payload: err });
//       });
//   };
// }

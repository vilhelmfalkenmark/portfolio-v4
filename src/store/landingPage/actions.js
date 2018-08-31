import axios from "axios";

import {
  LANDINGPAGE_FETCHING,
  LANDINGPAGE_FULFILLED,
  LANDINGPAGE_REJECTED
} from "store/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchLandingPage() {
  return function(dispatch) {
    dispatch({ type: LANDINGPAGE_FETCHING });
    axios
      .get(`${apiBase}/landing-page/`)
      .then(response => {
        dispatch({ type: LANDINGPAGE_FULFILLED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: LANDINGPAGE_REJECTED, payload: err });
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

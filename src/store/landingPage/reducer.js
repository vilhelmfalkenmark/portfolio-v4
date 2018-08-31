// import {
//   LANDINGPAGE_FETCHING,
//   LANDINGPAGE_FULFILLED,
//   LANDINGPAGE_REJECTED
// } from "store/actionTypes";

const iS = {
  fulfilled: false,
  fetching: false,
  error: false,
  data: []
};

const landingPage = (state = iS, action) => {
  switch (action.type) {
    // case INSTAGRAM_FETCHING: {
    //   return Object.assign({}, state, { fetching: true });
    // }
    // case INSTAGRAM_FULFILLED: {
    //   return Object.assign({}, state, {
    //     fulfilled: true,
    //     fetching: false,
    //     data: action.payload.data
    //   });
    // }
    // case INSTAGRAM_REJECTED: {
    //   return Object.assign({}, state, {
    //     fulfilled: false,
    //     fetching: false,
    //     error: true
    //   });
    // }
    default:
      return state;
  }
};

export default landingPage;

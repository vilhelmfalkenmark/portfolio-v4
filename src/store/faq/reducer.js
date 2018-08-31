// import {
//   FAQ_FETCHED,
//   FAQ_FETCHING_ERROR,
//   FAQ_FETCHING
// } from  "store/actionTypes";

const iS = {
  fulfilled: false,
  fetching: false,
  error: false,
  faq: []
};

const faq = (state = iS, action) => {
  switch (action.type) {
    case "FAQ_FETCHING": {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    default:
      return state;
  }
};

export default faq;

import {
  INSTAGRAM_FULFILLED,
  INSTAGRAM_REJECTED,
  INSTAGRAM_FETCHING
} from "store/actionTypes";

const iS = {
  fulfilled: false,
  fetching: false,
  rejected: false,
  data: {
    data: []
  }
};

const instagram = (state = iS, action) => {
  switch (action.type) {
    case INSTAGRAM_FETCHING: {
      return Object.assign({}, state, { fetching: true });
    }
    case INSTAGRAM_FULFILLED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        data: action.payload.data
      });
    }
    case INSTAGRAM_REJECTED: {
      return Object.assign({}, state, {
        fulfilled: false,
        fetching: false,
        rejected: true
      });
    }
    default:
      return state;
  }
};

export default instagram;

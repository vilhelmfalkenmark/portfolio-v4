import {
  EXPERIENCES_FETCHING,
  EXPERIENCES_FULFILLED,
  EXPERIENCES_REJECTED
} from "store/actionTypes";

const iS = {
  fulfilled: false,
  fetching: false,
  rejected: false,
  data: []
};

const experiences = (state = iS, action) => {
  switch (action.type) {
    case EXPERIENCES_FETCHING: {
      return Object.assign({}, state, { fetching: true });
    }
    case EXPERIENCES_FULFILLED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        data: action.payload
      });
    }
    case EXPERIENCES_REJECTED: {
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

export default experiences;

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import rootReducer from "store/rootReducer";

const globalWindow = typeof window !== "undefined" ? window : {};

const createStoreWithMiddleware = compose(applyMiddleware(promise(), thunk))(
  createStore
);

export default function configureStore(initialState = {}) {
  if (process.env.NODE_ENV !== "production") {
    return createStoreWithMiddleware(
      rootReducer,
      initialState,
      globalWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
        globalWindow.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return createStoreWithMiddleware(rootReducer, initialState);
}

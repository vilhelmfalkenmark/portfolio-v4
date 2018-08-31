import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "store/rootReducer";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = applyMiddleware(promise(), thunk);
let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(reducer, devTools, middleware);
} else {
  store = createStore(reducer, middleware);
}

export default store;

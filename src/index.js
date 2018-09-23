import React from "react";
import { render } from "react-dom";
import Root from "layout/Root";
// import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();

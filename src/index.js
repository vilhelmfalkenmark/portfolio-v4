import React from "react";
import { hydrate } from "react-dom";
import Root from "layout/Root";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter } from "react-router-dom";

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

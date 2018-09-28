import React from "react";
import { hydrate } from "react-dom";
import Root from "layout/Root";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { BrowserRouter } from "react-router-dom";

import store from "./store";

window.onload = () => {
  Loadable.preloadReady().then(() => {		
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>,
      document.getElementById("root")
    );
  });
};

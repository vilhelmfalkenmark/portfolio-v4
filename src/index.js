import React from "react";
import { render } from "react-dom";
import Root from "layout/Root";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { onInsertStylesHandler } from "layout/WithStyles";
import WithStylesContext from "layout/WithStylesContext";


render(
  <WithStylesContext onInsertCss={onInsertStylesHandler}>
    <Provider store={store}>
      <Root />
    </Provider>
  </WithStylesContext>,
  document.getElementById("root")
);
registerServiceWorker();

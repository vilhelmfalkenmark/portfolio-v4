import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

// import routes from "router/routes";
// import Header from "layout/Header";
// import Footer from "layout/Footer";
// import NotFound from "entrypoints/NotFound";
// import WithStyles from "layout/WithStyles";

import classNames from "classnames/bind";
import styles from "./Root.css";

const s = classNames.bind(styles);

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTopWithRouter = withRouter(ScrollToTop);

const Root = () => (
  // <Router>
  // <ScrollToTopWithRouter>
  <div className={s({ content: true })}>
    <h3>hejsan!!!</h3>
  </div>
  // </ScrollToTopWithRouter>
  // </Router>
);

export default Root;

// export default WithStyles(Root, s);

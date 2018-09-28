import React, { Component } from "react";
import { Route, withRouter, NavLink } from "react-router-dom";

import routes from "router/routes";
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
  <ScrollToTopWithRouter>
    <div className={s({ content: true })}>
      <ul>
        {routes.map(route => (
          <li>
            <NavLink to={route.path}>{route.navTitle}</NavLink>
          </li>
        ))}
      </ul>
      {routes.map(route => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.key}
        />
      ))}
    </div>
  </ScrollToTopWithRouter>
);

export default Root;

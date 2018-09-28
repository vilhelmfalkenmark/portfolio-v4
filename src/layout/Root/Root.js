import React, { Component } from "react";
import {
  // BrowserRouter,
  Route,
  // Switch,
  withRouter,
  NavLink
} from "react-router-dom";

import routes from "router/routes";
// import Header from "layout/Header";
// import Footer from "layout/Footer";
// import NotFound from "entrypoints/NotFound";
// import WithStyles from "layout/WithStyles";

// import Home from "entrypoints/Home";
// import Movies from "entrypoints/Movies";

import classNames from "classnames/bind";
import styles from "./Root.css";

const s = classNames.bind(styles);

// class ScrollToTop extends Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       window.scrollTo(0, 0);
//     }
//   }

//   render() {
//     return this.props.children;
//   }
// }

// const ScrollToTopWithRouter = withRouter(ScrollToTop);

const Root = () => (
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
        queryBeforeRender={route.queryBeforeRender}
        component={route.component}
        exact={route.exact}
        key={route.key}
      />
    ))}

    {/* <ScrollToTopWithRouter> */}

    {/* // </ScrollToTopWithRouter> */}
  </div>
);

export default withRouter(Root);

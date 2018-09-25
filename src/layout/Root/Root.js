import React, { Component } from "react";
import {
  // BrowserRouter,
  Route,
  // Switch,
  withRouter,
  NavLink
} from "react-router-dom";

import Loadable from "react-loadable";

// import routes from "router/routes";
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

function Loading() {
  return <div>Loading...</div>;
}

const ROUTES = [
  {
    path: "/",
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "HomeEntrypoint" */ "../../entrypoints/Home"),
      loading: Loading,
      modules: ["HomeEntrypoint"]
    }),
    // component: Home,
    key: 389972
  },
  {
    path: "/movies",
    exact: true,
    // component: Movies,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "MoviesEntrypoint" */ "../../entrypoints/Movies"),
      loading: Loading,
      modules: ["MoviesEntrypoint"] // <-- Tells react-loadable that this component requires the chunkfile named MoviesEntrypoint
    }),
    key: 35145
  }
];

const Root = () => (
  <div className={s({ content: true })}>
    <ul>
      <li>
        <NavLink to="">Hem</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Filmer</NavLink>
      </li>
    </ul>
    {ROUTES.map(route => (
      <Route
        path={route.path}
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

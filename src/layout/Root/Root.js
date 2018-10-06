import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import routes from "router/routes";
import Header from "layout/Header";
import NotFound from "entrypoints/NotFound";

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
      <Header />
      <Switch>
        {routes.map(route => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.key}
          />
        ))}
        <Route path="*" component={NotFound} />
      </Switch>

      {/* <Footer /> */}
    </div>
  </ScrollToTopWithRouter>
);

export default Root;
// <Switch>
//   {routes.map((route, index) => (
//     <Route
//       key={index}
//       exact={route.exact}
//       path={route.slug}
//       component={route.component}
//     />
//   ))}
//   {/* 404 */}
//   <Route path="*" component={NotFound} />
// </Switch>;

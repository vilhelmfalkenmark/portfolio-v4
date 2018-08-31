import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import routes from "router/routes";
import Header from "layout/Header";
import Footer from "layout/Footer";
import NotFound from "entrypoints/NotFound";
import WithStyles from "layout/WithStyles";

import s from "./Root.css";

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
  <Router>
    <ScrollToTopWithRouter>
      <div className={s({ content: true })}>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.slug}
              component={route.component}
            />
          ))}
          {/* 404 */}
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </ScrollToTopWithRouter>
  </Router>
);

export default WithStyles(Root, s);

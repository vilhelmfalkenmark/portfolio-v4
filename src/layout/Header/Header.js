import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import routes, { LANDING_ROUTE } from "router/routes";
import classNames from "classnames/bind";

import styles from "./Header.css";

const s = classNames.bind(styles);

const Header = ({ location }) => (
  <header className={s({ header: true })} name="header">
    <div
      className={s({
        container: true
      })}
    >
      <div className={s({ inner: true })}>
        <NavLink to={LANDING_ROUTE.path} className={s({ logoLink: true })} />
        <nav className={s({ navigation: true })}>
          <ul className={s({ list: true })}>
            {routes.map((route, index) => (
              <li
                className={s({
                  item: true
                  // item_isActive: route.path === location.pathname
                })}
                key={index}
              >
                <NavLink
                  exact
                  to={route.path}
                  className={s({ link: true })}
                  activeClassName={s({ isActive: true })}
                >
                  <span className={s({ linkTitle: true })}>
                    {route.navTitle}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default withRouter(Header);

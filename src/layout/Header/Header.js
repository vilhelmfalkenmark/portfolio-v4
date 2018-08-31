import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import routes, { HOME_ROUTE } from "router/routes";
import SVG from "components/SVG";
import Logo from "components/Logo";
import WithStyles from "layout/WithStyles";
import copy from "utils/copy";

import s from "./Header.css";

const Header = ({ location }) => (
  <header className={s({ header: true })} name="header">
    <div
      className={s({
        container: true
      })}
    >
      <div className={s({ inner: true })}>
        <NavLink to={HOME_ROUTE.slug} className={s({ logoLink: true })}>
          <Logo copy={copy.hashTag} />
        </NavLink>
        <nav className={s({ navigation: true })}>
          <ul className={s({ list: true })}>
            {routes.map((route, index) => (
              <li
                className={s({
                  item: true,
                  item_isActive: route.slug === location.pathname
                })}
                key={index}
              >
                <NavLink
                  exact
                  to={route.slug}
                  className={s({ link: true })}
                  activeClassName={s({ link_isActive: true })}
                >
                  <SVG
                    svg={route.icon}
                    className={s({
                      icon: true,
                      icon_isSmall: !route.largeIcon,
                      icon_isLarge: route.largeIcon,
                      icon_isActive: route.slug === location.pathname
                    })}
                  />
                  <span className={s.linkTitle}>{route.navTitle}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default withRouter(WithStyles(Header, s));

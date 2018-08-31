import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "components/ContactUs";
import WithStyles from "layout/WithStyles";
import { FAQ_ROUTE } from "router/routes";
import copy from "utils/copy";

import s from "./ErrorWall.css";

export const ErrorWall = ({ heading }) => {
  return (
    <div className={s({ container: true })}>
      <div className={s.innerContainer}>
        <h2 className={s.heading}>{heading}</h2>
        <p>
          Har du/ni några frågor om bröllopet som det inte ges svar på
          <Link to={FAQ_ROUTE.slug} className={s.link}>
            &nbsp;
            {FAQ_ROUTE.navTitle}
            &nbsp;
          </Link>
          så är ni varmt välkomna att kontakta oss:
        </p>
        <ContactUs people={copy.couple} />
      </div>
    </div>
  );
};

export default WithStyles(ErrorWall, s);

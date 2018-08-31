import React from "react";

import SVG from "components/SVG";
import ville from "assets/svg/ville.svg";
import WithStyles from "layout/WithStyles";

import s from "./Logo.css";

const Logo = ({ copy }) => (
  <figure className={s({ logo: true })}>
    <SVG className={s({ ville: true })} svg={ville} />
  </figure>
);

export default WithStyles(Logo, s);

import React from "react";
import WithStyles from "layout/WithStyles";

import s from "./ScrollDown.css";

const ScrollDown = ({ onClickCallback }) => {
  return (
    <button className={s.button} onClick={onClickCallback}>
      <span className={s.mouse}>
        <span className={s.wheel} />
      </span>
    </button>
  );
};

export default WithStyles(ScrollDown, s);

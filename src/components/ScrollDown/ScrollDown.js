import React from "react";
import classNames from "classnames/bind";

import styles from "./ScrollDown.css";
const s = classNames.bind(styles);

const ScrollDown = ({ onClickCallback }) => {
  return (
    <button className={s.button} onClick={onClickCallback}>
      <span className={s.mouse}>
        <span className={s.wheel} />
      </span>
    </button>
  );
};

export default ScrollDown;

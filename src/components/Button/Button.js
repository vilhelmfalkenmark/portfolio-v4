import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./Button.css";

import {
  BUTTON_TYPE_GREY,
  BUTTON_TYPE_GREEN,
  BUTTON_TYPE_RED
} from "utils/constants/buttonTypes";

const Button = ({
  onClickCallback,
  type,
  text,
  disabled,
  className,
  outlined
}) => {
  const classNames = s({
    button: true,
    isDisabled: disabled,
    // Solid buttons
    button_grey_solid: type === BUTTON_TYPE_GREY && !outlined,
    button_green_solid: type === BUTTON_TYPE_GREEN && !outlined,
    button_red_solid: type === BUTTON_TYPE_RED && !outlined,
    // Outlined buttons
    button_grey_outlined: type === BUTTON_TYPE_GREY && outlined,
    button_green_outlined: type === BUTTON_TYPE_GREEN && outlined,
    button_red_outlined: type === BUTTON_TYPE_RED && outlined,
    // Custom className from parent prop
    [className]: className
  });

  return (
    <button
      onClick={!disabled ? onClickCallback : () => null}
      className={classNames}
    >
      {text}
    </button>
  );
};

export default WithStyles(Button, s);

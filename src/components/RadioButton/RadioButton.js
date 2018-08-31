import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./RadioButton.css";

export const RadioButton = ({
  checkedAlternative,
  onChangeCallback,
  alternatives
}) => {
  return alternatives.map((alternative, index) => (
    <label className={s.label} key={index}>
      <input
        className={s.input}
        type="radio"
        value={alternative.label}
        checked={alternative.value === checkedAlternative}
        onChange={() => onChangeCallback(alternative.value)}
      />
      <span
        className={`${s.circle} ${
          alternative.value === checkedAlternative ? s.circle_isChecked : null
        }
        ${alternative.value ? s.circle_isPositive : s.circle_isNegative}
        `}
      />
      <span>{alternative.label}</span>
    </label>
  ));
};

export default WithStyles(RadioButton, s);

import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./SwitchButton.css";

const SwitchButton = ({ onClickCallback, label, disabled, switchOn }) => {
  return (
    <div className={s({ container: true })}>
      <div className={s({ buttonContainer: true })}>
        <button
          onClick={!disabled ? onClickCallback : () => null}
          className={s({ button: true })}
        >
          <span
            className={s({
              simulator: true,
              simulator_isOn: switchOn,
              simulator_isOff: !switchOn
            })}
          />
        </button>
      </div>
      <label htmlFor={label} className={s({ label: true })}>
        {label}
      </label>
    </div>
  );
};

export default WithStyles(SwitchButton, s);

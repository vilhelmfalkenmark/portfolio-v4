import React, { Component } from "react";
import WithStyles from "layout/WithStyles";
import s from "./Input.css";

export class Input extends Component {
  constructor() {
    super();
    this.state = { focus: false };
  }

  componentWillMount() {
    if (this.props.inputValue !== "") {
      this.setState({
        focus: true
      });
    }
  }

  render() {
    const {
      inputLabel,
      inputOnChange,
      inputValue,
      inputName,
      inputDisabled
    } = this.props;
    const { focus } = this.state;
    const inputHtml = [
      <input
        key={1}
        disabled={inputDisabled}
        name={inputName}
        value={inputValue}
        onFocus={() =>
          this.setState({
            focus: true
          })
        }
        onBlur={() =>
          this.setState({
            focus: inputValue ? true : false
          })
        }
        onChange={event => inputOnChange(event.target.value)}
        className={s({ field: true })}
      />,
      <span className={s({ line: true })} key={2} />
    ];
    const labelHtml = (
      <label
        htmlFor={inputName}
        className={s({ label: true, label_isFocused: focus })}
      >
        {inputLabel}
      </label>
    );

    return (
      <div className={s({ container: true })}>
        {labelHtml}
        {inputHtml}
      </div>
    );
  }
}

export default WithStyles(Input, s);

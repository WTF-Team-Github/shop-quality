import React from "react";
import "./Input.css";
import { icons } from "../assets";

const Input = React.forwardRef((props, ref) => {
  // console.log(ref);
  function addHyphen() {
    let element = ref.current.value.split("-").join("");
    let finalValue = element.match(/.{1,4}/g).join("-");
    ref.current.value = finalValue;
  }

  return (
    <>
      <label className={`flexLabel ${props.labelClassName}`} htmlFor={props.id}>
        <span className="input-label-bold">{props.label}</span>
        <small className="input-label-small">{props.description}</small>
      </label>

      <input
        ref={ref}
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.id === "cardNumber" ? addHyphen : props.onChange}
        className={`${props.inputClassName} ${"input"}`}
        disabled={props.isDisabled}
      />
    </>
  );
});
export default Input;

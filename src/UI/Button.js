import React from "react";

const Button = (props) => {
  return (
    <button
      disabled={props.isDisabled}
      type={props.type}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;

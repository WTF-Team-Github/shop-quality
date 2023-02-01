import "./Input.css";
import { icons } from "../assets";

const Input = (props) => {
  const flexLabel = props.icon && "input-label-flex";
  return (
    <>
      <label className={`flexLabel ${props.labelClassName}`} htmlFor={props.id}>
        <span className="input-label-bold">{props.label}</span>
        <small className="input-label-small">{props.description}</small>
      </label>

      <input
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        className={`${props.inputClassName} ${"input"}`}
        disabled={props.isDisabled}
      />
    </>
  );
};

export default Input;

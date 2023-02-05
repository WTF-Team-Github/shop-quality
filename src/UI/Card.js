import classes from "./Card.css";
const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes.card} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;

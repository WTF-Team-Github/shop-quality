import React from "react";
import Input from "../../UI/Input";
import "./AddNewCard.css";

const AddNewCard = () => {
  const inputDetails = [
    {
      id: "cardNumber",
      label: "Card number",
      description: "Enter the 16-digit-card number on the card",
      type: "number",

    },
    // check how to add space after 4 digits
    {
      id: "cvv",
      label: "CVV Number",
      description: "Enter the 3 digit number at the back of the card",
      type: "number",
    },
    {
      id: "expiry",
      label: "Expiry",
      description: "Enter the expiration date of the card",
      type: "date",
    },
    {
      id: "password",
      label: "Password",
      description: "Enter your card password",
      type: "password",
    },
    // add a toggle?
  ];

  return (
    <>
      {inputDetails.map((detail, id) => (
        <div className={``}>
          <Input
            icon={detail.icon}
            className={""}
            labelClassName={`add-card__label `}
            inputClassName="add-card__input"
            key={detail.id}
            id={detail.id}
            label={detail.label}
            type={detail.type}
            description={detail.description}
          />
        </div>
      ))}
    </>
  );
};

export default AddNewCard;

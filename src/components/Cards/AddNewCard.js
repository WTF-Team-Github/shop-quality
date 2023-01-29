import React from "react";
import Input from "../../UI/Input";
import "./AddNewCard.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const AddNewCard = () => {
  const inputDetails = [
    {
      id: "cardNumber",
      label: "Card number",
      description: "Enter the 16-digit-card number on the card",
      type: "text",
    },
    // check how to add space after 4 digits
    {
      id: "cvv",
      label: "CVV Number",
      description: "Enter the 3 digit number at the back of the card",
      type: "text",
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
    <section className="add-card ">
      <Card className="add-card__card">
        {/* need an arrow back icon to go to previous page */}

        <h3 className="add-card__heading"> Add New Card</h3>
        {inputDetails.map((detail, id) => (
          <div className="add-card__div">
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

        <div className="add-card__check-div">
          <input
            className="add-card__checkbox"
            type="checkbox"
            name=""
            id="setDefault"
          />
          <label className="add-card__check-label" htmlFor="setDefault">
            Set as default Payment method
          </label>
        </div>

        <Button className="add-card__btn"> Create Card</Button>
      </Card>
    </section>
  );
};

export default AddNewCard;

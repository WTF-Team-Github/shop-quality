import React, { useReducer, useRef, useState } from "react";
import Input from "../../UI/Input";
import "./AddNewCard.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { defaultFormState, formReducer } from "./FormReducer";

const AddNewCard = () => {
  const [formState, dispatchForm] = useReducer(formReducer, defaultFormState);

  const inputDetails = [
    {
      dispatchType: "FULL_NAME",
      id: "fullName",
      label: "Full Name",
      description: "Enter the name on the card",
      type: "text",
      ref: useRef(),
    },
    {
      dispatchType: "CARD_NUMBER",
      id: "cardNumber",
      label: "Card Number",
      description: "Enter the 16-digit-card number on the card",
      type: "text",
      ref: useRef(),
    },
    // check how to add space after 4 digits
    {
      dispatchType: "CVV",
      id: "cvv",
      label: "CVV Number",
      description: "Enter the 3 digit number at the back of the card",
      type: "text",
      ref: useRef(),
    },
    {
      dispatchType: "EXPIRY",
      id: "expiry",
      label: "Expiry",
      description: "Enter the expiration date of the card",
      type: "date",
      ref: useRef(),
    },
    {
      dispatchType: "PASSWORD",
      id: "password",
      label: "Password",
      description: "Enter your card password",
      type: "password",
      ref: useRef(),
    },
    // add a toggle?
  ];

  const dispatchHandler = ({ type, ref }) => {
    dispatchForm({ type, value: ref.current.value });
  };

  function submitHandler(e) {
    e.preventDefault();
    inputDetails.forEach((detail) => dispatchHandler(detail));

    // make cardDetails available outside submitHandler
    if (formState.isValid) {
      const cardDetails = inputDetails.reduce((acc, curr) => {
        acc[curr.id] = curr.ref.current.value;

        return acc;
      }, {});

      console.log("I am valid")
    }
    else console.log("I am invalid")

    // clear input values

    // post card details to firebase
    // fetch()
  }

  return (
    <section className="add-card ">
      <Card className="add-card__card">
        {/* need an arrow back icon to go to previous page */}

        <h3 className="add-card__heading"> Add New Card</h3>

        <form onSubmit={submitHandler}>
          {inputDetails.map((detail) => (
            <div className="add-card__div">
              <Input
                key={detail.id}
                icon={detail.icon}
                className={""}
                labelClassName={`add-card__label `}
                inputClassName="add-card__input"
                id={detail.id}
                label={detail.label}
                type={detail.type}
                description={detail.description}
                ref={detail.ref}
              />
            </div>
          ))}

          <div className="add-card__check-div">
            <label className="add-card__check-label" htmlFor="setDefault">
              Set as default Payment method
            </label>
            <input
              className="add-card__checkbox"
              type="checkbox"
              id="setDefault"
            />
          </div>

          <Button className="add-card__btn"> Create Card</Button>
        </form>
      </Card>
    </section>
  );
};

export default AddNewCard;

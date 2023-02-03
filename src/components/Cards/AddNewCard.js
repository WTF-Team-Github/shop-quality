import React, { useEffect, useReducer, useRef, useState } from "react";
import Input from "../../UI/Input";
import "./AddNewCard.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { defaultFormState, formReducer } from "./FormReducer";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets";

const AddNewCard = () => {
  const [formState, dispatchForm] = useReducer(formReducer, defaultFormState);
  const navigate = useNavigate();

  const [formState, dispatchForm] = useReducer(formReducer, defaultFormState);
  console.log(formState);

  const dispatchHandler = ({ dispatchType, ref }) => {
    dispatchForm({ type: dispatchType, value: ref.current.value });
  };

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

  function submitHandler(e) {
    e.preventDefault();

    inputDetails.forEach((detail) => {
      dispatchHandler(detail);
    });

    // make cardDetails available outside submitHandler
  }

  useEffect(() => {
    if (formState.isValid) {
      const cardInputDetails = inputDetails.reduce((acc, curr) => {
        acc[curr.id] = curr.ref.current.value;

        return acc;
      }, {});

      const allCardDetails = {
        ...cardInputDetails,
        default: checkboxRef.current.value,
      };

      // post card details to firebase..done
      // use try catch?
      fetch("https://shop-quality-default-rtdb.firebaseio.com/cards.json", {
        method: "POST",
        body: JSON.stringify(allCardDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => navigate("/", { replace: true }));
    } else {
    }

    // clear input values
  }, [formState.isValid]);

  return (
    <section className="add-card ">
      <Card className="add-card__card">
        <div>
          <img className="add-card__icons" src={icons.arrowLeft} alt="" />
          <h3 className="add-card__heading"> Add New Card</h3>
        </div>

        <form onSubmit={submitHandler}>
          {inputDetails.map((detail) => (
            <div key={detail.id} className="add-card__div">
              <Input
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
              // need to change this to onCheck
              onChange={() =>
                dispatchForm({ type: "DEFAULT_CARD", value: true })
              }
              className="add-card__checkbox"
              type="checkbox"
              id="setDefault"
              ref={checkboxRef}
            />

            {/* I need to add something that says if this is clicked, add a default property, value is yes, set to no for other cards
            
            
            */}
          </div>

          <Button type="submit" className="add-card__btn">
            {" "}
            Create Card
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default AddNewCard;

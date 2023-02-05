import React from "react";

export const defaultFormState = {
  numbervalue:"",
  nameValue:"",
  expiryValue:"",
  passwordValue:"",
  cvvValue:"",


  // value:{},
  // or should this be emailIsValid: false, or can any of the other cases update this isValid?
// I'll leave it for now
  isValid: false,

};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CARD_NUMBER":
      return {
        ...state,
        numberValue: action.value,
        value: action.value, 
        isValid: action.value > 16,
      };

    case "FULL_NAME":
      return {
        ...state,
        nameValue: action.value,


        isValid: action.value.trim().length >= 10,
      };

    case "CVV":
      return {
        ...state,
        cvvValue: action.value,
        isValid: action.value.trim().length === 3,
      };

    case "PASSWORD":
      return {
        ...state,
        passwordValue: action.value,
        isValid: action.value.trim().length === 4,
      };

    default:
      return state;
  }
};

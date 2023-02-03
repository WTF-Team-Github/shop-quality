import React from "react";

export const defaultFormState = {
  numberValue: "",
  nameValue: "",
  expiryValue: "",
  passwordValue: "",
  cvvValue: "",
  default: false,

  // value:{},
  // or should this be emailIsValid: false, or can any of the other cases update this isValid?
  // I'll leave it for now
  isValid: null,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "FULL_NAME":
      return {
        ...state,
        nameValue: action.value,
        isValid: action.value.trim().length >= 8,
      };

    case "CARD_NUMBER":
      return {
        ...state,
        numberValue: action.value.replaceAll("-", ""),
        isValid: action.value.replaceAll("-", "").trim().length === 16,
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

    case "DEFAULT_CARD":
      return {
        ...state,
        default: action.value,
      };
    default:
      return state;
  }
};

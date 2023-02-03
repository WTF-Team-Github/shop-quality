import React, { createContext, useState } from "react";

const CardContext = createContext({
  defaultCardId: null,
  setDefaultCard: () => {},
});

export const CardContextProvider = (props) => {
  const [defaultCardId, setDefaultCardId] = useState(null);

  function setDefaultCard(cardId) {
    console.log("set it");
    setDefaultCardId(cardId);
  }
  console.log(defaultCardId, setDefaultCardId, setDefaultCard);
  return (
    <CardContext.Provider
      value={{
        defaultCardId: defaultCardId,
        setDefaultCard: setDefaultCard,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;

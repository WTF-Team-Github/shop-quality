import React, { createContext, useEffect, useState } from "react";

const CardContext = createContext({
  defaultCardId: null,
  setDefaultCard: () => {},
});

export const CardContextProvider = (props) => {
  const [defaultCardId, setDefaultCardId] = useState(null);

  useEffect(() => {
    async function getDefaultCardId() {
      const res = await fetch(
        "https://shop-quality-default-rtdb.firebaseio.com/cards.json"
      );

      const data = await res.json();

      // console.log(data);
      const defaultCardKey = Object.keys(data).filter((property) => {
        // console.log(property);
        return data[property].default === true;
      })[0];

      setDefaultCardId(defaultCardKey);
    }

    getDefaultCardId()
  }, []);

  async function setDefaultCard(cardId) {
   setDefaultCardId(cardId)
  }

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

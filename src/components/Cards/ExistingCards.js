import React, { useEffect, useState, useContext } from "react";
import { ATMCard } from "atm-card-react";
import { icons } from "../../assets";
import "./ExistingCards.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { CardContextProvider } from "../../store/new-card-context";
import CardContext from "../../store/new-card-context";

const ExistingCards = () => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(CardContext);

  // console.log(defaultCardId, setDefaultCard)
  let content = <p className="no-card"> No card added </p>;
  if (isLoading) {
    content = <p className="no-card"> Getting your cards ...</p>;
  }

  if (errorMessage) {
    content = <p className="no-card"> {errorMessage}</p>;
  }

  async function getCards() {
    const allCards = [];
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(
        "https://shop-quality-default-rtdb.firebaseio.com/cards.json"
      );

      if (!res.ok || !res) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      for (const key in data) {
        const card = {
          id: key,
          ...data[key],
        };
        allCards.push(card);
      }

      setCards(allCards);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getCards();
  }, []);

  if (cards.length > 0) {
    content = cards.map((card, idx) => {
      return (
        <div className="cards-atm-div" key={card.id}>
          <ATMCard
            onChange={(data, idx) => {
              updateCard(data, idx);
              console.log(idx);
            }}
            year={new Date(card.expiry).getFullYear()}
            month={new Date(card.expiry).getMonth() + 1}
            cvv={card.cvv}
            number={card.cardNumber.replaceAll("-", "")}
            holderName={card.fullName}
            lifted="true"
            className="atm-card"
            bankLogo={
              <span>
                <img src={icons.bankBuildingWhite} />
                <h2
                  style={{
                    color: "white",
                    display: "inline",
                    marginLeft: "10px",
                  }}
                >
                  Team Github
                </h2>
              </span>
            }
            system={"mastercard"}
            hideDigits="true"
            scale="2"
          />

          <div className="select-card__div">
            <input
              className="select-card__checkbox"
              type="checkbox"
              defaultChecked={card.id === ctx.defaultCardId}
              onChange={() => {
                ctx.setDefaultCard(card.id);
                console.log(card.id);
              }}
              // id={cardId}
            />
            <label className="select-card__label" htmlFor={""}>
              Use as default payment method
            </label>
          </div>
        </div>
      );
    });
  }

  /**
   *
   */

  // const [number, setNumber] = useState("5399456790894378");
  // const [month, setMonth] = useState(expiryMonth);
  // const [year, setYear] = useState(expiryYear);
  // const [holder, setHolder] = useState("Deborah Animashaun");
  // const [cvv, setCvv] = useState("456");
  // const cardId = number.slice(number.length - 4);

  function updateCard(data, idx) {
    const newCards = [...cards];
    const updatedObject = {
      year: data.year,
      month: data.month,
      holderName: data.holderName,
      cvv: data.cvv,
      number: data.number,
    };

    newCards[idx] = updatedObject;
    setCards(newCards);
  }

  return (
    <CardContextProvider>
      <section className="cards">
        <Card className="cards__card">
          <h3 className="cards__heading"> Your Payment Cards</h3>

          <div className="cards__container">{content}</div>

          <Link to={"/new-card"}>
            <Button className="add-card__btn"> Add New Card</Button>
          </Link>
        </Card>
      </section>
    </CardContextProvider>
  );
};

export default ExistingCards;

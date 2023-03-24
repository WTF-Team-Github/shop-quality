import React, { useEffect, useState, useContext } from "react";
import { ATMCard } from "atm-card-react";
import { icons } from "../../assets";
import "./ExistingCards.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import CardContext from "../../store/new-card-context";

const ExistingCards = () => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(CardContext);

  let content = <p className="no-card"> No card added </p>;

  if (isLoading) {
    content = <p className="no-card"> Getting your cards ...</p>;
  }

  if (errorMessage) {
    content = <p className="no-card"> {errorMessage}</p>;
  }

  async function changeDefaultCard(e, cardId) {
    console.log("desired default");
    console.log(e.target.id);

    const res = await fetch(
      `https://shop-quality-default-rtdb.firebaseio.com/cards/${ctx.defaultCardId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          default: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res.json());

    const res1 = await fetch(
      `https://shop-quality-default-rtdb.firebaseio.com/cards/${e.target.id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          default: e.target.checked,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    ctx.setDefaultCard(e.target.id);
  }

  async function getCards() {
    const allCards = [];
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(
        "https://shop-quality-default-rtdb.firebaseio.com/cards.json"
      );

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
      if (error.message === "Failed to fetch") {
        error.message = "Something went wrong";
      }
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getCards();
  }, []);

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

  if (cards.length > 0) {
    content = cards.map((card, idx) => {
      return (
        <div className="cards-atm-div" key={card.id}>
          <ATMCard
            onChange={(data, idx) => {
              updateCard(data, idx);
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
            scale="1"
          />

          <div className="select-card__div">
            <input
              id={card.id}
              className="select-card__checkbox"
              type="radio"
              name="default-card"
              defaultChecked={card.default}
              onChange={(e) => {
                changeDefaultCard(e);
              }}
            />
            <label className="select-card__label" htmlFor={""}>
              Use as default payment method
            </label>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="cards">
      <Card className="cards__card">
        <h3 className="cards__heading"> Your Payment Cards</h3>

        <div className="cards__container">{content}</div>

        <Link to={"/new-card"}>
          <Button className="add-card__btn"> Add New Card</Button>
        </Link>
      </Card>
    </section>
  );
};

export default ExistingCards;

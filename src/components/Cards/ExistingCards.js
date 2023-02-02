import React, { useState } from "react";
import { ATMCard } from "atm-card-react";
import { icons } from "../../assets";
import "./ExistingCards.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";

const ExistingCards = () => {
  const now = new Date();
  const expiryYear = now.getFullYear() + 2;

  const expiryMonth = now.getMonth() + 1;
  console.log(expiryYear);

  const [number, setNumber] = useState("5399456790894378");
  const [month, setMonth] = useState(expiryMonth);
  const [year, setYear] = useState(expiryYear);
  const [holder, setHolder] = useState("Deborah Animashaun");
  const [cvv, setCvv] = useState("456");
  return (
    <section className="cards">
      <Card className="cards__card">
        <h3 className="cards__heading"> Your Payment Cards</h3>

        <ATMCard
          className="cards__atm"
          year={year}
          month={month}
          cvv={cvv}
          number={number}
          holderName={holder}
          lifted="true"
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
        <Link to={"/new-card"}>
          <Button className="add-card__btn"> Add New Card</Button>
        </Link>
      </Card>
    </section>
  );
};

export default ExistingCards;

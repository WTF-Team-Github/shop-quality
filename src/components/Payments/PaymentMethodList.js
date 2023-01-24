import React from "react";
import Button from "../../UI/Button";
import "./PaymentMethodList.css";
import { FaCreditCard, FaBuilding } from "react-icons/fa";
import { icons } from "../../assets/index";
import Card from "../../UI/Card";

const PaymentMethodList = () => {
  return (
    <section className="choose-payment">
      <Card className="choose-payment__card">
        <div>
          <img className="choose-payment__icons" src={icons.arrowLeft} alt="" />
          <h2 className="choose-payment__heading"> Choose Payment Method</h2>
        </div>

        <ul className="choose-payment__list">
          <a className="choose-payment__link" href="">
            <img className="choose-payment__icons" src={icons.creditCard} alt="" />
            <li className="choose-payment__list-item">Card</li>
          </a>

          <a className="choose-payment__link" href="">
            <img className="choose-payment__icons" src={icons.bankBuilding} alt="" />
            <li className="choose-payment__list-item">USSD Transfer</li>
          </a>

          <a className="choose-payment__link" href="">
            <img className="choose-payment__icons" src={icons.bankBuilding} alt="" />
            <li className="choose-payment__list-item">Use Bank App</li>
          </a>

          <a className="choose-payment__link" href="">
            <img className="choose-payment__icons" src={icons.payCash} alt="" />
            <li className="choose-payment__list-item">Cash on Delivery</li>
          </a>
        </ul>

        <Button className="choose-payment__btn"> Add Payment Method</Button>
      </Card>
    </section>
  );
};

export default PaymentMethodList;

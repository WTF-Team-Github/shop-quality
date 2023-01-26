import React from "react";
import Button from "../../UI/Button";
import "./ChoosePaymentMethodList.css";
import { icons } from "../../assets/index";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import PayWithUSSD from "./PayWithUSSD";
import PayWithBankTransfer from "./PayWithBankTransfer";

const ChoosePaymentMethodList = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  function openModal(e) {
    e.preventDefault();
    setIsModalOpen(true);
  }

  function closeModal(e) {
    e.preventDefault();
    setIsModalOpen(false);

  }

  return (
    <section className="choose-payment ">
      <Card className="choose-payment__card container">
        <div>
          <img className="choose-payment__icons" src={icons.arrowLeft} alt="" />
          <h2 className="choose-payment__heading"> Choose Payment Method</h2>
        </div>

        <div>
          <ul className="choose-payment__list">
            <Link to="/cards" className="choose-payment__link">
              <img
                className="choose-payment__icons"
                src={icons.creditCard}
                alt=""
              />
              <li className="choose-payment__list-item">Card</li>
            </Link>

            <a onClick={openModal} className="choose-payment__link" href="">
              <img
                className="choose-payment__icons"
                src={icons.phoneDial}
                alt=""
              />
              <li className="choose-payment__list-item">USSD Transfer</li>
            </a>

            {isModalOpen && <PayWithUSSD closeModal={closeModal} />}
            
            <a onClick={openModal} className="choose-payment__link" href="">
              <img
                className="choose-payment__icons"
                src={icons.bankBuilding}
                alt=""
              />
              <li className="choose-payment__list-item">Use Bank App</li>
            </a>
            {isModalOpen && <PayWithBankTransfer closeModal={closeModal}/>}

            <a className="choose-payment__link" href="">
              <img
                className="choose-payment__icons"
                src={icons.payCash}
                alt=""
              />
              <li className="choose-payment__list-item">Cash on Delivery</li>
            </a>
          </ul>
        </div>
        <Button className="choose-payment__btn"> Add Payment Method</Button>
      </Card>
    </section>
  );
};

export default ChoosePaymentMethodList;

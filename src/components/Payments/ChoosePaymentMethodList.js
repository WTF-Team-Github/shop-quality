import React from "react";
import Button from "../../UI/Button";
import "./ChoosePaymentMethodList.css";
import { icons } from "../../assets/index";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import PayWithUSSD from "./PayWithUSSD";
import PayWithBankTransfer from "./PayWithBankTransfer";
import PayWithCash from "./PayWithCash";

const ChoosePaymentMethodList = () => {
  const [showUSSDModal, setShowUSSDModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function openModal(e) {
    e.preventDefault();
    e.currentTarget.id === "USSD" && setShowUSSDModal(true);
    e.currentTarget.id === "transfer" && setShowTransferModal(true);
    e.currentTarget.id === "cash" && setShowCashModal(true);
  }

  function closeModal(e) {
    e.preventDefault();
    setShowUSSDModal(false);
    setShowTransferModal(false);
    setShowCashModal(false);
  }

  function radioChangeHandler(e) {
    // console.log(e.current.value);
    // console.log(e.current.name);
    console.log(e.target.id);
  }

  return (
    <section className="choose-payment ">
      <Card className="choose-payment__card ">
        <div>
          <img className="choose-payment__icons" src={icons.arrowLeft} alt="" />
          <h2 className="choose-payment__heading"> Choose Payment Method</h2>
        </div>

        <div>
          <ul className="choose-payment__list">
            <div className="choose-payment__div">
              <Link to="/cards" className="choose-payment__link">
                <img
                  className="choose-payment__icons"
                  src={icons.creditCard}
                  alt=""
                />
                <li className="choose-payment__list-item">Card</li>
              </Link>
              <input
                onChange={radioChangeHandler}
                type="radio"
                name="payment-method"
                id="card"
              />
            </div>

            <div className="choose-payment__div">
              <a
                id="USSD"
                onClick={openModal}
                className="choose-payment__link"
                href=""
              >
                <img
                  className="choose-payment__icons"
                  src={icons.phoneDial}
                  alt=""
                />
                <li className="choose-payment__list-item">USSD Transfer</li>
              </a>
              <input
                onChange={radioChangeHandler}
                type="radio"
                name="payment-method"
                id="ussd"
              />

              {showUSSDModal && <PayWithUSSD closeModal={closeModal} />}
            </div>

            <div className="choose-payment__div">
              <a
                id="transfer"
                onClick={openModal}
                className="choose-payment__link"
                href=""
              >
                <img
                  className="choose-payment__icons"
                  src={icons.bankBuilding}
                  alt=""
                />
                <li className="choose-payment__list-item">Use Bank App</li>
              </a>
              <input
                onChange={radioChangeHandler}
                type="radio"
                name="payment-method"
                id="bank-app"
              />
              {showTransferModal && (
                <PayWithBankTransfer closeModal={closeModal} />
              )}
            </div>

            <div className="choose-payment__div">
              <a
                id="cash"
                onClick={openModal}
                className="choose-payment__link"
                href=""
              >
                <img
                  className="choose-payment__icons"
                  src={icons.payCash}
                  alt=""
                />
                <li className="choose-payment__list-item">Cash on Delivery</li>
              </a>
              <input
                onChange={radioChangeHandler}
                type="radio"
                name="payment-method"
                id="cash"
              />

              {showCashModal && <PayWithCash closeModal={closeModal} />}
            </div>
          </ul>
        </div>
        <Button isDisabled={isButtonDisabled} className="choose-payment__btn ">
          Add Payment Method
        </Button>
      </Card>
    </section>
  );
};

export default ChoosePaymentMethodList;

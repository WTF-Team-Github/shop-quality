import React from "react";
import Modal from "../../UI/Modal/Modal";
import { icons } from "../../assets";
import "./PayWithBankTransfer.css";

const PayWithBankTransfer = (props) => {
  return (
    <div >
      <Modal>
        <div className="transfer__heading-div">
          <h3 className="transfer__heading">Transfer Instructions </h3>
          <button onClick={props.closeModal}>
            <img src={icons.close} alt="" />
          </button>
        </div>
        <p className="transfer-caveat">
          By selecting the Bank Transfer option, you agree to make an Internet
          Transfer as payment for your transaction
        </p>

        <div className="accept-terms__div">
          <label className="accept-terms__label" htmlFor="acceptTerms">
            Click to Accept Bank Transfer Terms
          </label>
          <input className="accept-terms__checkbox" type="checkbox" name="" id="acceptTerms" />
        </div>

        <div>
          <ul className="transfer__list">
            <li className="transfer__list-item">Bank: Guarantee Trust Bank</li>
            <li className="transfer__list-item">Name: Animashaun Deborah</li>
            <li className="transfer__list-item">Account Number: 0125070428</li>
            <li className="transfer__list-item">Amount: 15,000 Naira</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default PayWithBankTransfer;

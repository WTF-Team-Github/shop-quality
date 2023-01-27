import React, { useState } from "react";
import { icons } from "../../assets";
import Modal from "../../UI/Modal/Modal";
import "./PayWithUSSD.css";

const PayWithUSSD = (props) => {
  return (
    <>
      <div className="ussd">
        <Modal onClose={props.closeModal}>
          <div className="ussd__heading-div">
            <h3 className="ussd__heading">Pay With USSD </h3>
            <button onClick={props.closeModal}>
              <img onClick={props.closeModal} src={icons.close} alt="" />
            </button>
          </div>

          <div>
            <ul className="ussd__list">
              <li className="ussd__list-item">
                <p>
                  Use any of the codes to pay with USSD depending on your bank
                </p>
              </li>
              <li className="ussd__list-item">
                <h5> GTB</h5>
                <p>737*1*Amount*0125070428#</p>
              </li>
              <li className="ussd__list-item">
                <h5>UBA</h5>
                <p>*919*4*0125070428*Amount#</p>
              </li>
              <li className="ussd__list-item">
                <h5>FIRST BANK</h5>
                <p>*894*Amount*0125070428#</p>
              </li>
              <li className="ussd__list-item">
                <h5>ACCESS BANK</h5>
                <p> *901*2*Amount*0125070428#</p>
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default PayWithUSSD;

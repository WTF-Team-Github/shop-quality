import React, {useState} from "react";
import "./PayWithCash.css"
import Modal from "../../UI/Modal/Modal";
import { icons } from "../../assets";


const PayWithCash = (props) => {
    const [areTermsAccepted, setAreTermsAccepted] = useState()
  return (
    <div>
      <Modal>
        <div className="cash__heading-div">
          <h3 className="cash__heading">Terns and Conditions </h3>
          <button onClick={props.closeModal}>
            <img src={icons.close} alt="" />
          </button>
        </div>
        <p className="cash-caveat">
          By selecting the pay with cash option, you agree to the following
          terms and condtionns
        </p>

        <div>
          <ul className="cash__list">
            <li className="cash__list-item">
              You would have to make payment in full before opening your package
            </li>
            <li className="cash__list-item">
              Once the package seal is broken, the item can only be returned if
              damaged, defective or has missing parts
            </li>
            <li className="cash__list-item">Amount: 15,000 Naira</li>
          </ul>
        </div>

        <div className="accept-terms__div">
          <label className="accept-terms__label" htmlFor="acceptTerms">
            Click to Accept Pay With Cash Terms
          </label>
          <input
            className="accept-terms__checkbox"
            type="checkbox"
            name=""
            id="acceptTerms"
            onChange={() => setAreTermsAccepted((prevState) => !prevState)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PayWithCash;

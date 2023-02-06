import React, { useState, useEffect } from "react";
import { icons } from "../../assets/index";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [checkout, setCheckout] = useState(null);

  const url = `http://localhost:3000/shipping-add/1`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCheckout(data);
      });
  }, [url]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shipping-address-list`);
  };

  return !checkout ? (
    <p>loading</p>
  ) : (
    <section className="checkout">
      <div className="checkout-container">
        <div className="checkout-header">
          <Link to="/" className="checkout-icon">
            <img className="checkout__icons" src={icons.arrowLeft} alt="" />
          </Link>
          <h2> Checkout</h2>
        </div>

        <div className="checkout-container">
          <div className="checkoutList">
            <div className="checkoutList-span">
              <p> {checkout.fullname} </p>

              <button onClick={handleClick} className="checkoutList-btn btn">
                Change
              </button>
            </div>
            <p>{checkout.address}</p>
            <p>
              {checkout.state},{checkout.zip},{checkout.country}
            </p>
          </div>
          <div className="payment"></div>

          <div>
            <div className="payment">
              <h2> Payment</h2>
              <button className="payment-btn btn">Change</button>
            </div>

            <div className="payment-card">
              <span></span>
              <p>**** **** **** 7985 </p>
            </div>
          </div>

          <div className="delivery">
            <h2>Delivery Method</h2>
            <div className="delivery-cards">
              <div className="delivery-cards">
                <span>
                  <p className="card-title">FedEx</p>
                  <p className="card-detail">2-3 working days</p>
                </span>
              </div>
              <div className="delivery-cards">
                <span>
                  <p className="card-title">UPS.COM</p>
                  <p className="card-detail">2-3 working days</p>
                </span>
              </div>
              <div className="delivery-cards">
                <span>
                  <p className="card-title">DHL</p>
                  <p className="card-detail">2-3 working days</p>
                </span>
              </div>
            </div>
          </div>

          <div className="ordered-item">
            <div className="title">
              <p>order </p>
              <p>$112</p>
            </div>
            <div className="title">
              <p> Delivery</p>
              <p>$15</p>
            </div>
            <div className="title">
              <p>Summary</p>
              <p>$127</p>
            </div>

            <button className="btn delivery-btn">Submit order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

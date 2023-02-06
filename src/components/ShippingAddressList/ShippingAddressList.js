import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShippingAddressList.css";
import { icons } from "../../assets/index";

const ShippingAddressList = () => {
  const [Address, setAddress] = useState(null);
  const [checkBoxValue, setCheckBoxValue] = useState(null);

  const url = "http://localhost:3000/shipping-add";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAddress(data);
      });
  }, [url]);

  const handleClick = (e) => {
    {
    }
  };

  return (
    <section className="shippingAddList">
      <div className="shippingAddList-Container">
        <div className="shippingAddList-header">
          <Link to="/" className="shippingAddList-icon">
            <img
              className="choose-payment__icons"
              src={icons.arrowLeft}
              alt=""
            />
          </Link>

          <h2> Shipping Address</h2>
        </div>

        <div className="shippingList-container">
          {Address &&
            Address.map((address) => (
              <div className="shippingList">
                <div className="shippingList-span">
                  <p>{address.fullname}</p>
                  <Link to="/shipping-address" state={address}>
                    <button onClick={handleClick} className="shippingList-btn">
                      Edit
                    </button>
                  </Link>
                </div>
                <p>{address.address}</p>
                <p>
                  {address.state},{address.zip},{address.country}
                </p>
                <div className="select-address">
                  <input
                    class="styled-checkbox"
                    id="1"
                    type="checkbox"
                    checked={checkBoxValue === address.id}
                    onClick={() => setCheckBoxValue(address.id)}
                  />
                  <label for="styled-checkbox-1">Use as shipping address</label>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingAddressList;

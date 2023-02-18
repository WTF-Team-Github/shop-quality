import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./AddShippingAddress.css";
import Button from "../../UI/Button";

import { icons } from "../../assets/index";

const AddShippingAddress = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setFullname(location.state.fullname);
      setAddress(location.state.address);
      setCountry(location.state.country);
      setState(location.state.state);
      setZip(location.state.zip);
    }
  }, [location]);
  console.log(location.state);

  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const shippingAdd = { fullname, address, country, state, zip };
    setIsPending(true);
    if (location.state) {
      fetch(`http://localhost:3000/shipping-add/${location.state.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shippingAdd),
      }).then(() => {
        console.log("updated");
        setIsPending(false);
      });
    } else {
      fetch("http://localhost:3000/shipping-add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shippingAdd),
      }).then(() => {
        console.log("added");
        setIsPending(false);
      });
    }

    history("/shipping-address-list");
  };

  return (
    <section className="shippingAdd">
      <div className="shippingAdd-Container">
        <div className="shippingAdd-header">
          <Link to="/" className="shippingAdd-icon">
            <img
              className="choose-payment__icons"
              src={icons.arrowLeft}
              alt=""
            />
          </Link>

          <h2> Adding Shipping Address</h2>
        </div>

        <form onSubmit={handleSubmit} className="shippingAdd-form">
          <label>Fullname</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter fullname.."
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <p>{fullname}</p>
          <label>Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter address.."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <label>Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />

          <label>State</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

          <label>Zip Code (Postal Code)</label>
          <input
            type="text"
            title="Five digit zip code"
            placeholder="Type in your ZipCode.."
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
          <Button
            disabled={isPending}
            type="submit"
            className="shippingAdd-btn"
          >
            {isPending
              ? "Loading.."
              : location.state
              ? "Edit Address"
              : "Save Address"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddShippingAddress;

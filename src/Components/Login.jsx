import React, { useState } from "react";
import { Link } from "react-router-dom";
import leftIcon from "../assets/left-icon.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <Link to="./Signup">
        <img
          src={leftIcon}
          alt="left-pointing-arrow"
          width="30px"
          height="30px"
          className="leftIcon"
        />
      </Link>

      <div className="loginWrapper">
        <div className="auth-form-container">
          <h1>Login</h1>
          <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@abc.xyz"
              id="email"
              name="email"
            />
            <label htmlFor="password"> Password </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="*************"
              name="password"
              id="password"
            />
            <button className="submitBtn" type="submit">
              Login
            </button>
          </form>

          <Link to="/Signup">
            <button className="linkBtn">
              {" "}
              Don't have an account? Register here{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;

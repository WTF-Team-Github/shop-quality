import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
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
          <button className='submitBtn' type="submit">Login</button>
        </form>
        <button className='linkBtn' >Don't have an account? Register here</button>
      </div>
    </div>
  );
}

export default Login;

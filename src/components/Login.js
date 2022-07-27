import React from "react";
import "../styles/style.css";

function Login() {
  // login form
  return (
    <div className="login">
      <form type="submit" className="login-form">
        <h2 id="h2">Log in to account</h2>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account?<button id="account-btn">Sign Up</button>
      </p>
    </div>
  );
}

export default Login;

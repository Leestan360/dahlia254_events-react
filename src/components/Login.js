import React from "react";
import "../styles/style.css"

function Login() {

  // login form
  return (
    <form type="submit" className="login-form">
      <h2 id="h2">Login</h2>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p>Don't have an account?<button id="account-btn">SignUp</button></p>
    </form>
  )
}

export default Login;
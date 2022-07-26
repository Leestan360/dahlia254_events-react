import React from "react";
import "../styles/style.css"

function Login() {
  return (
    <form type="submit" className="login-form">
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p>Don't have an account?<button>SignUp</button></p>
    </form>
  )
}

export default Login;
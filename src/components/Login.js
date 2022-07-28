import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css";

function Login() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedInUser, setLoggedInUser] = useState([]);

  useEffect(() => {
    fetch("https://dahlia254-react.herokuapp.com/signup")
    .then((res) => res.json())
    .then(data => {
      setUserData(data)
      console.log(data)
    })
  }, [])

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const userLogin = userData.filter((user, index) => {
      if (user.email === email && user.password === password) {
        alert(`Welcome `)
        navigate("/")
      } else {
        alert("Invalid email or password!")
      }

      setLoggedInUser(userLogin)
    })
  }

  // login form
  return (
    <div className="login">
      <form type="submit" className="login-form" onSubmit={handleSubmit}>
        <h2 id="h2">Log in to account</h2>
        <input 
          type="email"
          
          placeholder="Email" 
          required 
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
         
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account?
        <Link
          to="/signup" 
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;

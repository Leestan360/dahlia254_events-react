import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function Authentication() {


  // for value inputs in the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // capture changes that happen to the inputs
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const signupFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
    };

    axios.post("https://dahlia254-react.herokuapp.com/signup", signupFormData)
    .then(res => {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!")
      } else if (signupFormData.password.length < 6) {
        alert("Password must be a minimum of 6 characters")
      } else {
        console.log(res)
        alert(`Welcome ${signupFormData.firstName} ${signupFormData.lastName}`)
      }
    })
    .catch(err => console.log(err))
  }

  // signup form
  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 id="h2">Create Account</h2>
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          value={formData.firstName}
          placeholder="FirstName"
          required
        />
        <input
          onChange={handleChange}
          name="lastName"
          type="text"
          value={formData.lastName}
          placeholder="LastName"
          required
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email"
          required
        />
        
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={formData.password}
          placeholder="Password"
          required
        />
        <input
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Have an account?        
        <Link
          to="/login"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}

export default Authentication;

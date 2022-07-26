import React, { useState } from "react";
import "../styles/style.css"


function Authentication() {

  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function onAddUser(newUser) {
    setUsers([...users, newUser])
  }

  // function checkPassword() {
  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match")
  //   }
  // }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dahlia254-react.herokuapp.com/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({firstName: formData.firstName, lastName: formData.lastName, email: formData.email,
      password: formData.password, confirmPassword: formData.confirmPassword})
    })
    .then(response => response.json())
    .then(data => {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match")
      } else {
      onAddUser(data)
      setFormData({...formData, firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
      console.log(data)}
    })
  }


  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input onChange={handleChange} name="firstName" type="text" placeholder="FirstName" required />
      <input onChange={handleChange} name="lastName" type="text" placeholder="LastName" required />
      <input onChange={handleChange} name="email" type="email" placeholder="Email" required />
      <input onChange={handleChange} name="password" type="password" placeholder="Password" required />
      <input onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirm Password" required />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Authentication;
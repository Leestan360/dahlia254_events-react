import React, { useState } from "react";


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

  function handleSubmit(e) {
    e.preventDefault();
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
      onAddUser(data)
      setFormData({...formData, firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="firstName" type="text" placeholder="FirstName"/>
      <input onChange={handleChange} name="lastName" type="text" placeholder="LastName"/>
      <input onChange={handleChange} name="email" type="email" placeholder="Email"/>
      <input onChange={handleChange} name="password" type="password" placeholder="Password"/>
      <input onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirm Password"/>
      <button type="submit">Signup</button>
    </form>
  );
}

export default Authentication;
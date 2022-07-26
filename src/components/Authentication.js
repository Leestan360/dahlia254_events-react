import React, { useState } from "react";


function Authentication({ onAddUser }) {

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
    .the(response => response.json())
    .the(data => {
      onAddUser(data)
      setFormData({...formData, firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" placeholder="FirstName"/>
      <input onChange={handleChange} type="text" placeholder="LastName"/>
      <input onChange={handleChange} type="email" placeholder="Email"/>
      <input onChange={handleChange} type="password" placeholder="Password"/>
      <input onChange={handleChange} type="password" placeholder="Confirm Password"/>
      <button type="submit">Signup</button>
    </form>
  );
}

export default Authentication;
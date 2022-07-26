import React, { useState } from "react";
import "../styles/style.css";


function NavBar() {

  const [users, setUsers] = useState([]);

  function onAddUser(newUser) {
    setUsers([...users, newUser])
  }

  return (
    <div className="navbar">
      <h2>Dahlia254_Events</h2>
      <div className="about">
        <p>About</p>
        <p>Events</p>
        <p>Weddings</p>
        <button id="signup-btn">Login</button>
        <button onAddUser={onAddUser}>Signup</button>
      </div>
    </div>
  );
}

export default NavBar;
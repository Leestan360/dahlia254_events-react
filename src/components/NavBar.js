import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";
// import Authentication from "./Authentication";
// import Login from "./Login";


function NavBar() {

  return (
    <div className="navbar">
      <h2>Dahlia254</h2>
      <div className="about">
        <NavLink
          id="nav-link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
        id="nav-link"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
        id="nav-link"
          to="/events"
        >
          Events
        </NavLink>
        <NavLink
        id="nav-link"
          to="/weddings"
        >
          Weddings
        </NavLink>
        <NavLink
        id="login-btn"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
        id="signup-btn"
          to="/signup" 
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
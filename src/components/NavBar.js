import React from "react";
import "../styles/style.css";
// import Authentication from "./Authentication";
// import Login from "./Login";


function NavBar() {

  return (
    <div className="navbar">
      <h2>Dahlia254_Events</h2>
      <div className="about">
        <p>About</p>
        <p>Events</p>
        <p>Weddings</p>
        <button  id="signup-btn">Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}

export default NavBar;
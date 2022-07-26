// import all required components
import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import NavBar from "./NavBar";
import Login from "./Login";
import EventsList from "./EventsList";
import WeddingsList from "./WeddingsList";
import Home from "./Home";
import About from "./About";

function App() {


  // routes to the components on the page
  return (
  <div>
    <NavBar />
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/events" element={<EventsList />} />  
      <Route exact path="/weddings" element={<WeddingsList />} /> 
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Authentication />} /> 
      <Route exact path="/" element={<Home />} />  
    </Routes>
  </div>
  );
}

export default App;

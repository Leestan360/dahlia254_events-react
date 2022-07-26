import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import NavBar from "./NavBar";
import Login from "./Login";
import EventsList from "./EventsList";
import WeddingsList from "./WeddingsList";

function App() {


  return (
  <div>
    <NavBar />
    <Routes>
      <Route exact path="/signup" element={<Authentication />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/about" />
      <Route exact path="/events" element={<EventsList />} />  
      <Route exact path="/weddings" element={<WeddingsList />} />  
      <Route exact path="/" element={<Authentication />} />  
    </Routes>
  </div>
  );
}

export default App;

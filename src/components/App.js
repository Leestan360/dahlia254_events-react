import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import NavBar from "./NavBar";
// import EventsList from "./EventsPage";
// import { Route, Routes } from "react-router-dom";
// import WeddingsList from "./WeddingsPage";
// import Login from "./Login";

function App() {


  return (
  <div>
    <NavBar />
    <Routes>
      <Route exact path="/signup" element={<Authentication />} /> 
    </Routes>
  </div>
  );
}

export default App;

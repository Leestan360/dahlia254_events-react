import React from "react";
import Authentication from "./Authentication";
import EventsPage from "./EventsPage";
import NavBar from "./NavBar";
import WeddingsPage from "./WeddingsPage";

function App() {


  return (
  <div>
    <NavBar />
    <WeddingsPage />
    <EventsPage />
    <Authentication />
  </div>
  );
}

export default App;

import React from "react";
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
      {/* <Routes> */}
        {/* <Route exact path="/about">
        </Route>
        <Route exact path="/events">
          <EventsList />
        </Route>
        <Route exact path="/weddings">
          <WeddingsList />
        </Route> */}
        {/* <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Authentication />
        </Route>
        <Route exact path="/">
        </Route>
      </Routes> */}
      <Authentication />
  </div>
  );
}

export default App;

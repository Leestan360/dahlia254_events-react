import React, { useEffect, useState } from "react";
import "../styles/style.css"
import SingleEvent from "./SingleEvent";


function EventsList() {

  // set initial events before fetch
  const [events, setEvents] = useState([]);

  // fetch events to display when the page loads
  useEffect(() => {
    fetch("https://dahlia254-react.herokuapp.com/events")
    .then(res => res.json())
    .then(data => {
      setEvents(data)
    })
  }, [])


  // map through the events to display each event
  const displayEvents = events.map((event, index) => {
    return <SingleEvent key={index} event={event}/>})

  // display the events
  return (
    <div className="wedding-event">
      {displayEvents}
    </div>
  );
}

export default EventsList;
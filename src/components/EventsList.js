import React, { useEffect, useState } from "react";
import "../styles/style.css"

function EventsList() {

  // set initial events before fetch
  const [allEvents, setAllEvents] = useState([]);

  // fetch events to display when the page loads
  useEffect(() => {
    fetch("https://dahlia254-react.herokuapp.com/events")
    .then(res => res.json())
    .then(data => {
      setAllEvents(data)
    })
  }, [])

  // map through the events to display each event
  const displayEvents = allEvents.map((oneEvent, index) => {
    return <div key={index} className="show-details">
        <img src={oneEvent.image} alt="Events Images"/>
        <p>{oneEvent.date}</p>
        <p>{oneEvent.time}</p>
        <p>{oneEvent.description}</p>
    </div>
  })

  // display the events
  return (
    <div className="wedding-event">
      {displayEvents}
    </div>
  );
}

export default EventsList;
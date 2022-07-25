import React, { useEffect, useState } from "react";
import "../styles/style.css"

function EventsPage() {

  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetch("https://dahlia254-react.herokuapp.com/events")
    .then(res => res.json())
    .then(data => {
      setAllEvents(data)
    })
  }, [])

  const displayEvents = allEvents.map((oneEvent, index) => {
    return <div key={index} className="show-details">
        <img src={oneEvent.image} alt="Events Images"/>
        <p>{oneEvent.date}</p>
        <p>{oneEvent.time}</p>
        <p>{oneEvent.description}</p>
    </div>
  })

  return (
    <div className="wedding-event">
      {displayEvents}
    </div>
  );
}

export default EventsPage;
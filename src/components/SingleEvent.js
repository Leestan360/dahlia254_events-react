import React, { useState } from "react";

function SingleEvent({ event }) {

  // const [image, date, time, description] = event;
  const [isBooked, setIsBooked] = useState(false)

  function toggleIsBooked() {
    setIsBooked((isBooked) => !isBooked)
  }

  return (
    <div className="show-details">
      <img src={event.image} alt="Event Images"/>
      <h3>{event.date}</h3>
      <h3>{event.time}</h3>
      <p>{event.description}</p>
      <button onClick={toggleIsBooked}>{!isBooked ? "Book Event" : "Cancel Event"}</button>
    </div>
  );
}

export default SingleEvent;
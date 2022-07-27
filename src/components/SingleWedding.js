import React from "react";

function SingleWedding({ wedding }) {


  return (
    <div className="show-details">
      <img src={wedding.image} alt="Event Images"/>
      <h3>{wedding.date}</h3>
      <h3>{wedding.time}</h3>
      <p>{wedding.description}</p>
    </div>
  );
}

export default SingleWedding;
import React, { useEffect, useState } from "react";
import "../styles/style.css"

function WeddingsList() {

  // set initial weddings before the page loads
  const [weddings, setWeddings] = useState([]);

  // fetch weddings to display
  useEffect(() => {
    fetch("https://dahlia254-react.herokuapp.com/weddings")
    .then(res => res.json())
    .then(data => {
      setWeddings(data)
    })
  }, [])

  // map through the weddings fetched to display each wedding
  const getWeddings = weddings.map((wedding, index) => {
    return <div key={index} className="show-details">
        <img src={wedding.image} alt="Wedding Images"/>
        <p>{wedding.date}</p>
        <p>{wedding.time}</p>
        <p>{wedding.description}</p>
    </div>
  })

  // display the each wedding
  return (
    <div className="wedding-event">
      {getWeddings}
    </div>
  );
}

export default WeddingsList;
import React, { useEffect, useState } from "react";
import "../styles/style.css"

function WeddingsList() {

  const [weddings, setWeddings] = useState([]);

  useEffect(() => {
    fetch("https://dahlia254-react.herokuapp.com/weddings")
    .then(res => res.json())
    .then(data => {
      setWeddings(data)
    })
  }, [])

  const getWeddings = weddings.map((wedding, index) => {
    return <div key={index} className="show-details">
        <img src={wedding.image} alt="Wedding Images"/>
        <p>{wedding.date}</p>
        <p>{wedding.time}</p>
        <p>{wedding.description}</p>
    </div>
  })

  return (
    <div className="wedding-event">
      {getWeddings}
    </div>
  );
}

export default WeddingsList;
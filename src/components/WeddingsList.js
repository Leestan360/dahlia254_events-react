import React, { useEffect, useState } from "react";
import "../styles/style.css"
import SingleWedding from "./SingleWedding";

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
    return <SingleWedding key={index} wedding={wedding}/>})

  // display each wedding
  return (
    <div className="wedding-event">
      {getWeddings}
    </div>
  );
}

export default WeddingsList;
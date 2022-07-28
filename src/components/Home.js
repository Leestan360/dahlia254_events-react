import React, { useEffect } from "react";

function Home() {

  useEffect(() => {
    fetch("https://ticketmasterstefan-skliarovv1.p.rapidapi.com/getDeliveries")
    .then(res => res.json())
    .then(data => {console.log(data)})
  })
  return (
    <div id="home-page">
  
    </div>
  )
}

export default Home;
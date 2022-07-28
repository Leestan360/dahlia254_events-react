import axios from "axios";
import React, { useState } from "react";
import event from "./event (1).png"
import event4 from './event4.png'
import event1 from "./event1.png";
import event2 from "./event2.png";
import event3 from "./event3.png";
import event5 from "./event5.png"
import wedding from "./wedding.png"
import wedding1 from "./wedding1.png"
import wedding2 from "./wedding2.png"
import wedding3 from "./wedding3.png"
import wedding4 from "./wedding4.png"
import wedding5 from "./wedding5.png"

function Home() {
  const [formData, setFormData] = useState({email: "", default: ""})

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const detailsFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
    };

    axios.post("https://dahlia254-react.herokuapp.com/requests", detailsFormData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
      <div className="home-page">
        <form id="request" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
          />
          <textarea
            onChange={handleChange}
            name="details"
            value={formData.details}
            placeholder="Enter details"
            rows={15}
          />
          <input type="submit" value="Send your request" />
        </form>
        <div className="home-images">
          <img src={event4} alt="event one"/>
          <img src={wedding3} alt="wedding four" />
          <img src={event1} alt="event two"/>
          <img src={wedding4} alt="wedding five" />
          <img src={event2} alt="event three"/>
          <img src={wedding} alt="wedding one" />
          <img src={wedding1} alt="wedding two" />
          <img src={event3} alt="event four"/>
          <img src={wedding2} alt="wedding three" />
          <img src={event5} alt="event five"/>
          <img src={wedding5} alt="wedding six" />
          <img src={event} alt="event one"/>
        </div>
      </div>
    );
  }

export default Home;

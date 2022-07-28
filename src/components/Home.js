import axios from "axios";
import React, { useState } from "react";

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
      </div>
    );
  }

export default Home;

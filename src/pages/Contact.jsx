import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    services: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }
  return (
    <div className="form-container">
      <h2>Get in touch</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          value={data.name}
        />
        <input
          className="form-input"
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={data.email}
        />
        <textarea
          className="form-textarea"
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          value={data.message}
        ></textarea>
        <label htmlFor="services">What are you interested in?</label>
        <select
          name="services"
          id="services"
          onChange={handleChange}
          value={data.services}
          className="form-select"
        >
          <option value="">-- Choose --</option>
          <option value="portrait">Portrait Photos</option>
          <option value="wedding">Wedding Photos</option>
          <option value="family">Family Photos</option>
          <option value="graduation">Graduation Photos</option>
        </select>
        <button className="form-submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

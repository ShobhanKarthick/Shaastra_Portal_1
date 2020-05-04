import React, { useState } from "react";
import "./Mystyles.css";
import Drawer from "./Drawer";

function Contact() {
  const openSideNav = () => {
    document.getElementById("drawer").style.display = "block";
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("Submitted Successfully!!!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="common-page">
      <div className="common-bar">
        <div className="common-menu" onClick={openSideNav}>
          <i className="material-icons"> menu </i>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-title"> CONTACT US </div>
        <div className="contact-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <form name="contact-form" className="contact-form">
          <div className="input-container">
            <input
              className="contact-input"
              placeholder="Name"
              type="text"
              value={name}
              onChange={nameHandler}
            />
            <input
              onChange={emailHandler}
              className="contact-input"
              placeholder="E-mail"
              type="email"
              value={email}
            />
          </div>
          <textarea
            form="contact-form"
            rows="8"
            placeholder="Message"
            value={message}
            onChange={messageHandler}
          />
          <input
            className="contact-submit"
            type="submit"
            placeholder="submit"
            onClick={submitHandler}
          />
        </form>
      </div>
      <Drawer id="drawer" section="contact" />
    </div>
  );
}

export default Contact;

import React from "react";
import "./Mystyles.css";
import Drawer from "./Drawer";

function AboutUs() {
  const openSideNav = () => {
    document.getElementById("drawer").style.display = "block";
  };

  const person1 = require("./Images/person1.png");
  const person2 = require("./Images/person2.png");
  const person3 = require("./Images/person3.png");
  const person4 = require("./Images/person4.png");

  return (
    <div className="common-page">
      <div className="common-bar">
        <div className="common-menu" onClick={openSideNav}>
          <i className="material-icons"> menu </i>
        </div>
      </div>
      <div className="aboutus-start">
        <div className="aboutus-title">ABOUT US</div>
        <div>&nbsp;</div>
        <div className="about-down-arrow">
          <i className="material-icons" id="down">
            keyboard_arrow_down
          </i>
        </div>
      </div>
      <div >
      <table className="aboutus-team">
      <tr className="about-row">
      <td><img src={person1} alt="person" /></td>
      <td><img src={person2} alt="person" /></td>
      <td><img src={person3} alt="person" /></td>
      </tr>
      <tr className="about-row">
      <td><img src={person4} alt="person" /></td>
      <td><img src={person1} alt="person" /></td>
      <td><img src={person2} alt="person" /></td>
      </tr>
      <tr className="about-row">
      <td><img src={person3} alt="person" /></td>
      <td><img src={person4} alt="person" /></td>
      <td><img src={person1} alt="person" /></td>
      </tr>
      </table>
      </div>

      <Drawer section="about" />
    </div>
  );
}

export default AboutUs;

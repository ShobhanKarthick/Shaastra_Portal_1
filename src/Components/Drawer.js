import React from "react";
import "./Mystyles.css";


function Drawer({ section }) {
  const source = require("./Images/intro_bg.jpg");
  const closeDrawer = () => {
    document.getElementById("drawer").style.display = "none";
  };

  const highlight = () => {
    if (section === "home") {
      document.getElementById("drawer-head-home").style.backgroundColor =
        "#222222";
      document.getElementById("home-icon").style.color = "#be18be";
    }
    if (section === "about") {
      document.getElementById("drawer-head-about").style.backgroundColor =
        "#222222";
      document.getElementById("person-icon").style.color = "#be18be";
    }
    if (section === "portfolio") {
      document.getElementById("drawer-head-portfolio").style.backgroundColor =
        "#222222";
      document.getElementById("portfolio-icon").style.color = "#be18be";
    }
    if (section === "contact") {
      document.getElementById("drawer-head-contact").style.backgroundColor =
        "#222222";
      document.getElementById("mail-icon").style.color = "#be18be";
    }
  };

  return (
    <div className="drawer" id="drawer" onLoad={highlight}>
      <div id="close-button" onClick={closeDrawer}>
        <i className="material-icons"> close </i>
      </div>
      <div className="drawer-header">
        <div className="drawer-header-content">
          <img src={source} height="55px" alt="Profile Pic" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "35%",
            flex: 2,
          }}
        >
          <div className="drawer-header-content" id="header-title">
            Fullname
          </div>
          <div className="drawer-header-content" id="header-subtitle">
            Job - Designation
          </div>
        </div>
      </div>
      <div className="drawer-content">
        <a href="/">
          <div id="drawer-head-home">
            <div className="drawer-head">
              <i className="material-icons" id="home-icon">
                home
              </i>
              <div className="drawer-titles"> HOME </div>
            </div>
          </div>
        </a>
        <a href="/aboutus">
          <div id="drawer-head-about">
            <div className="drawer-head">
              <i className="material-icons" id="person-icon">
                person
              </i>
              <div className="drawer-titles"> ABOUT US </div>
            </div>
          </div>
        </a>
        <a href="/portfolio">
          <div id="drawer-head-portfolio">
            <div className="drawer-head">
              <i className="material-icons" id="portfolio-icon">
                view_quilt
              </i>
              <div className="drawer-titles"> PORTFOLIO </div>
            </div>
          </div>
        </a>
        <a href="/contact">
          <div id="drawer-head-contact">
            <div className="drawer-head">
              <i className="material-icons" id="mail-icon">
                mail
              </i>
              <div className="drawer-titles"> CONTACT </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Drawer;

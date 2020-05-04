import React from "react";
import "./Mystyles.css";
import Drawer from "./Drawer";

function Intro(props) {
  const openSideNav = () => {
    document.getElementById("drawer").style.display = "block";
  };
  return (
    <div className="intro-page">
      <div id="menu" onClick={openSideNav}>
        <i className="material-icons">menu</i>
      </div>
      <div className="intro">
        <div className="intro-content">
          <div className="intro-content-head">Lorem Ipsum</div>
          <div className="intro-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </div>
          <div id="intro-content-button">
            <button className="intro-content-button">
              LOREM
              <i
                className="material-icons"
                style={{ fontSize: 40, borderRadius: "0px" }}
              >
                keyboard_arrow_right
              </i>
            </button>
          </div>
        </div>
        </div>
        <Drawer id="drawer" section="home"/>

        </div>
  );
}

export default Intro;

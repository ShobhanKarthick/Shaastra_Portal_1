import React from "react";
import "./Mystyles.css";
import Drawer from "./Drawer";

function Portfolio() {
  const openSideNav = () => {
    document.getElementById("drawer").style.display = "block";
  };

  const image1 = require('./Images/intro_bg1.jpg');
  const image2 = require('./Images/intro_bg2.jpg')
  const image3 = require('./Images/intro_bg3.jpg')
  const image4 = require('./Images/intro_bg4.jpg')



  return (
    <div className="common-page">
      <div className="common-bar">
        <div className="common-menu" onClick={openSideNav}>
          <i className="material-icons"> menu </i>
        </div>
      </div>
      <div className="portfolio-start">
        <div className="portfolio-title">PORTFOLIO</div>
        <div className="portfolio-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <a href="#Portfolio">
        <div className="down-arrow">
        <i className="material-icons" id="down">keyboard_arrow_down</i>
        </div>
        </a>
        </div>
      <table className="portfolio-table" id="Portfolio">
      <tr>
      <td className="portlio-column"><img src={image1} width="500px" alt="scene"/></td>
      <td className="portlio-column"><img src={image2} width="500px" alt="scene"/></td>
      <td className="portlio-column"><img src={image3} width="500px" alt="scene"/></td>
      </tr>
      <tr>
      <td className="portlio-column"><img src={image2} width="500px" alt="scene"/></td>
      <td className="portlio-column"><img src={image3} width="500px" alt="scene"/></td>
      <td className="portlio-column"><img src={image4} width="500px" alt="scene"/></td>
      </tr>
      <tr>
      <td className="portlio-column"><img src={image3} width="500px" alt="scene"/></td>
      <td className="portlio-column"><img src={image4} width="500px" alt="scene"/></td>
      <td className="portlio-column"><img src={image1} width="500px" alt="scene"/></td>
      </tr>
      </table>
      <Drawer section="portfolio" />
    </div>
  );
}

export default Portfolio;

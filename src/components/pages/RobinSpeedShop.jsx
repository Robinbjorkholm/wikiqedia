import React from "react";
import UlList from "../utils/Ul-List";
import "../../styles/Projects.css";

function RobinSpeedShop() {
  return (
    <div className="project" id="old-portfolio">
      <br />
      <p className="ul-header">robinspeedshop</p>
      <br />
      <p className="information-p">
       Imaginary webshop for car performance parts 
        <br />
        Link to GitHub repository&nbsp;
        <a
          href="https://github.com/Robinbjorkholm/robinspeedshop"
          target="_blank"
          rel="noreferrer"
        >
          <span className="pronounce">Here</span>
        </a>
      </p>
      <br />
      <UlList
        name={"Stack used"}
        stack={["Nextjs14","MongoDB"]}
      />

      <br />
    </div>
  );
}

export default RobinSpeedShop;

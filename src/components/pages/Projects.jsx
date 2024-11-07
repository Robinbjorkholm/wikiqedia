import React from "react";
import OldPortfolio from "./OldPortfolio";
import FinLunch from "./FinLunch";
import RobinSpeedShop from "./RobinSpeedShop";
 
function Projects() {
  return (
    <div id="Projects" className="section">
      <p className="section-header" id="Projects">
        Projects
      </p>
      <div className="section-separator" />
      <div id="projects-parent-div">
        <OldPortfolio />
        <br />
        <div className="section-separator" />
        <br />
        <FinLunch />
        <div className="section-separator" />
        <br />
        <RobinSpeedShop />
      </div>
      <br />
    </div>
  );
}

export default Projects;

import React from "react";
import OldPortfolio from "./OldPortfolio";
import FinLunch from "./FinLunch";

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
      </div>
      <br />
    </div>
  );
}

export default Projects;

import React from "react";
import OldPortfolio from "./OldPortfolio";
import FinLunch from "./FinLunch";

function Projects() {
  return (
    <div>
      <p className="section-header" id="Projects">
        Projects
      </p>
      <div className="section-separator" />
      <div id="projects-parent-div">
        <OldPortfolio />
        <div className="section-separator" />
        <FinLunch />
      </div>
      <br />
    </div>
  );
}

export default Projects;

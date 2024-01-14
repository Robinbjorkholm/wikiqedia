import React from "react";
import sadge from "../../images/sadge.png";

function ProfessionalCareer() {
  return (
    <div id="Professional Career" className="section">
      {" "}
      <p className="section-header" id="First Steps Into Software Development">
        Professional career
      </p>
      <div className="section-separator" />
      <p className="information-p">
        nonexistent maybe you want to be a part of the journey &nbsp;
      </p>
      <img src={sadge} id="sadge" alt="sadge" />
      <br />
    </div>
  );
}

export default ProfessionalCareer;

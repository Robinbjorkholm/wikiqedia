import React from "react";
import FirstLinesOfCode from "./FirstLinesOfCode";
import RobinInformation from "../RobinInformation";
import FirstStepsIntoSoftwareDevelopment from "./FirstStepsIntoSoftwareDevelopment";

function Introduction({ isMobileLayout }) {
  return (
    <div className="flex-div">
      <div id="flex-left">
        <p className="information-p">
          <b> Robin Alexander Björkholm </b>
          (born july 8, 1998) is a Finnish-Swedish, self-taught software
          developer.CEO for the famous{" "}
          <a href="https://www.w3schools.com/html/html_entities.asp">
            {" "}
            finlunch
          </a>{" "}
          web application.
        </p>
        <br />
        <FirstLinesOfCode />
        {!isMobileLayout && <RobinInformation />}
        <FirstStepsIntoSoftwareDevelopment />
      </div>{" "}
      <div id="flex-right"> {isMobileLayout && <RobinInformation />}</div>
    </div>
  );
}

export default Introduction;

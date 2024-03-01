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
          developer and cat expert
        </p>
        <br />
        {!isMobileLayout && <RobinInformation />}
        <FirstLinesOfCode />
        <FirstStepsIntoSoftwareDevelopment />
      </div>{" "}
      <div id="flex-right"> {isMobileLayout && <RobinInformation />}</div>
    </div>
  );
}

export default Introduction;

import React from "react";
import rollcage from "../../images/rollcage.jpg";

function PersonalLife() {
  return (
    <div className="asd" id="Personal Life">
      {" "}
      <p className="section-header" id="First Steps Into Software Development">
        Personal life
      </p>
      <div className="section-separator" />
      <div className="information-img-div">
        <a href={rollcage}>
          <img
            src={rollcage}
            alt="robin welding rollcage"
            className="information-img"
          />
        </a>
        <p className="image-caption">Robin welding a rollcage in his racecar</p>
      </div>
      <p className="information-p">
        Not much is known about Robins personal life other than that he likes to
        build cars in his freetime{" "}
      </p>
      <br />
    </div>
  );
}

export default PersonalLife;

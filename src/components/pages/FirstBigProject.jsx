import React from "react";
import dayofrelease from "../../images/dayofrelease.png";

function FirstBigProject() {
  return (
    <div id="First Big Project" className="section">
      <p className="section-header" id="First Big Project">
        First big project
      </p>
      <div className="section-separator" />
      <div className="information-img-div">
        <a href={dayofrelease}>
          <img
            src={dayofrelease}
            className="information-img"
            alt="robin coding in 2021"
          />
        </a>
        <p className="image-caption">Day of finlunch release</p>
      </div>
      <p className="information-p">
        December 24th 2022 Robin started his first real software project, a web
        application about fastfood where he would post pictures and reviews of
        fastfood so people have an easier time deciding what to eat(and not
        getting scammed buying something that wasn't what they thought it would
        be)
        <br />
        At the start of 2024 the web application went online, a maxed out
        website using all the necessary features for creating a next level food
        community.It had everything from creating users to admin accounts and
        password resets truly built different.
        <br />
        Within the first 24 hours the web application already had 2 registered
        users.
      </p>
    </div>
  );
}

export default FirstBigProject;

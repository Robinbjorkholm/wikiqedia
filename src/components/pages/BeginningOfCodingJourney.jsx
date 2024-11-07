import React from "react";
import coding from "../../images/coding.jpg";

function BeginningOfCodingJourney() {
  return (
    <div id="Beginning Of Coding Journey" className="section">
      <p className="section-header" id="Beginning Of Coding Journey">
        Beginning Of Coding Journey
      </p>
      <div className="section-separator" />{" "}
      <div className="information-img-div">
        <a href={coding}>
          <img
            src={coding}
            className="information-img"
            alt="robin coding in 2021"
          />
        </a>
        <p className="image-caption">Robin coding in 2019</p>
      </div>
      <p className="information-p">
        1 day when he was talking to himself and wondering what he would like to
        do in the future he got the idea to work as a software developer, he
        started searching for jobs and found out that a skill that was very high
        in demand was{" "}
        <a
          href="https://en.wikipedia.org/wiki/React_(software)"
          target="_blank"
          rel="noreferrer"
        >
          <span className="pronounce">React</span>.
        </a>
        <br />
        He researched and bought an online "Fullstack" course about
        React. He built a simple website that had a button and a
        number, everytime you clicked the button the number incremented.
      
        
      </p>
    </div>
  );
}

export default BeginningOfCodingJourney;

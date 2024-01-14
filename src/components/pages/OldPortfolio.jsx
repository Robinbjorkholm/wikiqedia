import React from "react";
import UlList from "../utils/Ul-List";
import "../../styles/Projects.css";

function OldPortfolio() {
  return (
    <div className="project" id="old-portfolio">
      <br />
      <p className="ul-header">Old Portfolio</p>
      <br />
      <p className="information-p">
        First website he built in <b>React</b> with <b>express</b> &{" "}
        <b>mongoDB</b> backend to display his other coding projects and general
        information about him. <br />
        <br />A live version is available{" "}
        <a href="https://steady-belekoy-283f9a.netlify.app/">
          <b>Here</b>
        </a>
        <br />
        Link to github repository&nbsp;
        <a
          href="https://github.com/Robinbjorkholm/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <b>Here</b>
        </a>
      </p>
      <br />
      <UlList
        name={"Stack used"}
        stack={["ReactJS", "Node.js", "Express.js", "MongoDB"]}
      />

      <br />
    </div>
  );
}

export default OldPortfolio;

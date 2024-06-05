import React from "react";
import UlList from "../utils/Ul-List";
import "../../styles/Projects.css";

function FinLunch() {
  return (
    <div className="project" id="FinLunch">
      <p className="ul-header">FinLunch</p>
      <br />
      <p className="information-p">
        First real webapp built in <b>React</b> with <b>express</b> &{" "}
        <b>MySQL</b> backend to upload food reviews, other users can also sign
        up and discuss the review within the comment section for that specific
        food review. A more indepth review is available on{" "}
        <a href="https://github.com/Robinbjorkholm/FInlunch">
          <span className="pronounce">GitHub</span>
        </a>
        <br />
        <br />A live version is available{" "}
        <a href="https://superlative-cheesecake-27dd1d.netlify.app/">
          <span className="pronounce">Here</span>
        </a>
        <br />
        Link to GitHub repository&nbsp;
        <a
          href="https://github.com/Robinbjorkholm/FInlunch"
          target="_blank"
          rel="noreferrer"
        >
          <span className="pronounce">Here</span>
        </a>
      </p>
      <br />
      <UlList
        name={"Stack used"}
        stack={["ReactJS", "Node.js", "Express.js", "MySQL"]}
      />
    </div>
  );
}

export default FinLunch;

import React from "react";

function stackUsed({ name, stack }) {
  return (
    <div className="test1234">
      <ul className="stack-used-ul">
        <b>{name}</b>
        {stack.map((stack) => {
          return (
            <li className="stack-used-li" key={stack.projectName}>
              {stack.projectName} -
              <a href={stack.githubLink} target="_blank" rel="noreferrer">
                {" "}
                github -
              </a>
              <a href={stack.liveVersion} target="_blank" rel="noreferrer">
                {" "}
                Live version
              </a>
            </li>
          );
        })}
      </ul>{" "}
      <br /> 
    </div>
  );
}

export default stackUsed;

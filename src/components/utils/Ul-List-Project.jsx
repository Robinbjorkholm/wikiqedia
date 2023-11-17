import React from "react";

function stackUsed({ name, stack }) {
  return (
    <div>
      <br />
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
              <a href={stack.githubLink} target="_blank" rel="noreferrer">
                {" "}
                Live version
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default stackUsed;

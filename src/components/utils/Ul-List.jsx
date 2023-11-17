import React from "react";

function stackUsed({ name, stack, github }) {
  return (
    <div>
      <br />
      <ul className="stack-used-ul">
        <b>{name}</b>
        {stack.map((stack) => {
          return (
            <li className="stack-used-li" key={stack}>
              {stack}
              
            </li>
            
          );
        })}
      </ul>
    
     
    </div>
  );
}

export default stackUsed;

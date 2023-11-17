import React from "react";

function FirstStepsIntoSoftwareDevelopment() {
  return (
    <div >
      {" "}
      <p
        className="section-header"
        id="First Steps Into Software Development"
      >
        First steps into software development
      </p>
      <div className="section-separator" />
      <div className="test">
        <p className="information-p">
          A year had passed since his attempt at building a game when he read in
          the newsletter that a university was hosting a coding bootcamp for the
          lack of software developers where the main programming language was{" "}
          <a
            href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
            target="_blank"
          >
            C#.
          </a>
          <br></br>
          After the coding bootcamp he built some applications using C# and the{" "}
          <a
            href="https://en.wikipedia.org/wiki/.NET_Framework"
            target="_blank"
          >
            <span className="pronounce">.NET framework</span>
          </a>
          (pronounced as <span className="pronounce">"dot net"</span>).
        </p>
        <br />
      </div>
    </div>
  );
}

export default FirstStepsIntoSoftwareDevelopment;

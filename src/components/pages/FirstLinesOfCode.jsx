import React from "react";

function FirstLinesOfCode() {
  return (
    <div id="First Lines Of Code" className="section">
      <p className="section-header" id="First Lines Of Code">
        First lines of code
      </p>
      <div className="section-separator" />
      <p className="information-p">
        It was on the 3rd of september 2019 when Robin realized that every game
        nowadays sucks, that was the day he installed{" "}
        <a
          href="https://en.wikipedia.org/wiki/Unity_(game_engine)"
          target="_blank"
          rel="noreferrer"
        >
          <span className="pronounce">Unity</span>
        </a>{" "}
        and decided to make his own game.He opened
        youtube and typed "c# tutorial beginner" and clicked on the first video
        that showed up,he watched the whole 4 hours and was now confident in
        writing a console application that printed "Hello world". He went back
        to building his game with his new skills but was unable to add collision
        to his character so he gave up on programming.
      </p>
    </div>
  );
}

export default FirstLinesOfCode;

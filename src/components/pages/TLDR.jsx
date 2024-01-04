import React from "react";
import calculateAge from "../utils/calculateAge";
import UlList from "../utils/Ul-List";
import UlListProject from "../utils/Ul-List-Project";
import "../../styles/tldr.css";

function TLDR() {
  return (
    <div className="test123">
      <p className="section-header" id="TL;DR">
        TL;DR
      </p>
      <div className="section-separator" />
      <UlList
        name={"About"}
        stack={[
          calculateAge("1998/07/08", 2) + " years old",
          "coded as a hobby for about " +
            calculateAge("2019/09/03", 5) +
            " years",
          "speaking Swedish, Finnish and English",
        ]}
      />
      <UlList
        name={"Skills"}
        stack={[
          "frontend - reactJS",
          "backend - Node.Js(express.js)",
          "Database - MySQL(sequelize) , MongoDB(Mongoose)",
          "Problem solving (worked on my racecar for 5+ years that has been nothing but problem solving... 😪)",
        ]}
      />
      <UlListProject
        name={"Projects(best to worst)"}
        stack={[
          {
            projectName: "Finlunch - react, express, MySQL",
            githubLink: "https://github.com/Robinbjorkholm/FInlunch",
            liveVersion: "",
          },
          {
            projectName: "Old portfolio - react, express, MongoDB",
            githubLink: "https://github.com/Robinbjorkholm/portfolio",
            liveVersion: "",
          },
          {
            projectName: " New portfolio wikiqedia - react",
            githubLink: "https://github.com/Robinbjorkholm",
            liveVersion: "",
          },
          {
            projectName: "number guessing - C#, WPF",
            githubLink: "https://github.com/Robinbjorkholm/gissNummro",
            liveVersion: "",
          },
        ]}
      />
    </div>
  );
}

export default TLDR;

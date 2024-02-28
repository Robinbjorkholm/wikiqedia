import React from "react";
import calculateAge from "../utils/calculateAge";
import UlList from "../utils/Ul-List";
import UlListProject from "../utils/Ul-List-Project";
import "../../styles/tldr.css";

function TLDR() {
  return (
    <div id="TL;DR" className="section">
      <p className="section-header" id="TL;DR">
        TL;DR
      </p>
      <div className="section-separator" />
      <UlList
        name={"About"}
        stack={[
          calculateAge("1998/07/08", 2) + " years old",
          "First line of code written about " +
            calculateAge("2019/09/03", 5) +
            " years ago",
          "Speaking Swedish, Finnish and English",
          "Living in Pietarsaari",
        ]}
      />

      <UlList
        name={"Skills"}
        stack={[
          "Frontend - ReactJS",
          "Backend - Node.Js(express.js)",
          "Database - MySQL(sequelize) , MongoDB(Mongoose)",
          "Problem solving (worked on my racecar for 5+ years that has been nothing but problem solving... 😪)",
        ]}
      />
      <UlListProject
        name={"Projects(best to worst)"}
        stack={[
          {
            projectName: "Finlunch - React, Express, MySQL",
            githubLink: "https://github.com/Robinbjorkholm/FInlunch",
            liveVersion: "https://superlative-cheesecake-27dd1d.netlify.app/",
          },
          {
            projectName: "Old portfolio - React, express, MongoDB",
            githubLink: "https://github.com/Robinbjorkholm/portfolio",
            liveVersion: "https://steady-belekoy-283f9a.netlify.app/",
          },
          {
            projectName: " New portfolio wikiqedia - React",
            githubLink: "https://github.com/Robinbjorkholm",
            liveVersion: "https://wikiqedia.netlify.app/",
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

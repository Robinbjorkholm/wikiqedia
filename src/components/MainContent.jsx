import React from "react";
import { Link } from "react-scroll";
import { TfiMenuAlt } from "react-icons/tfi";
import RobinInformation from "./RobinInformation";
import BeginningOfCodingJourney from "./pages/BeginningOfCodingJourney";
import FirstBigProject from "./pages/FirstBigProject";
import FirstLinesOfCode from "./pages/FirstLinesOfCode";
import FirstStepsIntoSoftwareDevelopment from "./pages/FirstStepsIntoSoftwareDevelopment";
import Projects from "./pages/Projects";
import TLDR from "./pages/TLDR";
import PersonalLife from "./pages/PersonalLife";
import Introduction from "./pages/Introduction";
import "../styles/MainContent.css";

function MainContent({ isMobileLayout, isMobileNavigation }) {
  return (
    <div className="main-content-div">
      <div id="main-content">
        <div id="main-content-header">
          <h2 id="name">
            <TfiMenuAlt size={24} />
            Robin Björkholm
          </h2>
          <div className="section-separator-header" />
          <p className="tldr">
            Not interested about his story? Go to{" "}
            <Link to={"TL;DR"} smooth={true} duration={250}>
              TL;DR
            </Link>
          </p>
          <div className="section-separator-header" />
          <p className="introduction-header">
            From Wikiqedia, the free encyclopedia
          </p>
        </div>
        <div className="flex-div-components">
          <div id="flex-left">
            <Introduction isMobileLayout={isMobileLayout} />

            <BeginningOfCodingJourney />
            <FirstBigProject />
            <Projects />
            <PersonalLife />
            <TLDR />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

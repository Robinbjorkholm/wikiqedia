import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { TfiMenuAlt } from "react-icons/tfi";
import BeginningOfCodingJourney from "./pages/BeginningOfCodingJourney";
import FirstBigProject from "./pages/FirstBigProject";
import Projects from "./pages/Projects";
import TLDR from "./pages/TLDR";
import PersonalLife from "./pages/PersonalLife";
import Introduction from "./pages/Introduction";
import ProfessionalCareer from "./pages/ProfessionalCareer";
import "../styles/MainContent.css";
import "../styles/SideNavigation.css";

function MainContent({
  isMobileLayout,
  settoggleMobileNavigation,
  toggleMobileNavigation,
  stickyMobileNavigation,
  setstickyMobileNavigation,
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView === true) {
      setstickyMobileNavigation(false);
    } else if (inView === false) {
      setstickyMobileNavigation(true);
    }
  }, [inView]);
  return (
      <div id="main-content">
        <div className="main-content-header" id="(Top)">
          <div id="header-flex"  >
            <div id="name-icon" ref={ref}>
              <TfiMenuAlt
                size={24}
                onClick={() =>
                  settoggleMobileNavigation(!toggleMobileNavigation)
                }
              />
            </div>
            {stickyMobileNavigation ? (
              <div id="name-icon-sticky">
                <TfiMenuAlt
                  size={24}
                  onClick={() =>
                    settoggleMobileNavigation(!toggleMobileNavigation)
                  }
                />
              </div>
            ) : null}

            <h1 id="name">
              <span id="name-text">Robin Björkholm</span>
            </h1>
          </div>
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
            <ProfessionalCareer/>
            <PersonalLife />
            <TLDR />
          </div>
        </div>
      </div>
  );
}

export default MainContent;

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
import "../styles/MainContent.css";

function MainContent({
  isMobileLayout,
  isMobileNavigation,
  settoggleMobileNavigation,
  toggleMobileNavigation,
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const [stickyIcon, setstickyIcon] = useState(false);
  useEffect(() => {
    if (inView === true) {
      setstickyIcon(false);
    } else if (inView === false) {
      setstickyIcon(true);
    }
  }, [inView]);
  return (
    <div className="main-content-div">
      <div id="main-content">
        <div id="main-content-header">
          <div id="header-flex">
            <div id="name-icon" ref={ref}>
              <TfiMenuAlt
                size={24}
                onClick={() =>
                  settoggleMobileNavigation(!toggleMobileNavigation)
                }
              />
            </div>
            {stickyIcon ? (
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
            <PersonalLife />
            <TLDR />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

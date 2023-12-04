import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { IoIosArrowForward } from "react-icons/io";
import "../styles/SideNavigation.css";

function SideScrollBar({ toggleMobileNavigation, settoggleMobileNavigation }) {
  const navigationInfo = [
    { id: 1, title: ["First Lines Of Code"] },
    {
      id: 2,
      title: ["First Steps Into Software Development"],
    },
    { id: 3, title: ["Beginning Of Coding Journey"] },
    { id: 4, title: ["First Big Project"] },
    {
      id: 5,
      title: ["Projects"],
      underTitle: ["Old portfolio", "Finlunch"],
    },
    { id: 6, title: ["Personal Life"] },
    { id: 7, title: ["TL;DR"] },
  ];

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const [stickyNavigation, setstickyNavigation] = useState(false);

  useEffect(() => {
    if (inView === true) {
      setstickyNavigation(false);
      settoggleMobileNavigation(false);
    } else if (inView === false) {
      setstickyNavigation(true);
      settoggleMobileNavigation(true);
    }
  }, [inView]);

  const [toggleMenu, settoggleMenu] = useState([]);
  return (
    <div>
     
        <div
          ref={ref}
          className={
            toggleMobileNavigation
              ? "side-navigation-menu-div"
              : "side-navigation-menu-div-mobile"
          }
        >
          <p className="contents-header">Contents</p>
          <ul className="side-navigation-ul">
            {navigationInfo.map((info, id) => {
              return (
                <ul key={id} className="side-navigation-ul-nested">
                  {info.underTitle ? (
                    <button
                      className="side-navigation-icon"
                      onClick={() => {
                        if (toggleMenu.includes(info.id)) {
                          const newTogglemenu = toggleMenu.filter(
                            (title) => title !== info.id
                          );
                          settoggleMenu(newTogglemenu);
                        } else settoggleMenu((titles) => [...titles, info.id]);
                      }}
                    >
                      <IoIosArrowForward
                        size={16}
                        className={
                          toggleMenu.includes(info.id)
                            ? "side-navigation-button-close"
                            : "side-navigation-button-open"
                        }
                      />
                    </button>
                  ) : null}
                  <Link
                    activeClass="Active"
                    spy={true}
                    to={info.title[0]}
                    smooth={true}
                    duration={250}
                  >
                    <div className="side-navigation-title-div">
                      <ul className="side-navigation-title">
                        {info.title[0]}{" "}
                      </ul>
                      <div
                        className={
                          toggleMenu.includes(info.id)
                            ? "side-navigation-title-under-div-show"
                            : "side-navigation-title-under-div-hidden"
                        }
                      >
                        {info.underTitle
                          ? info.underTitle.map((underTitle, id) => {
                              return (
                                <li
                                  className="side-navigation-title-under-li"
                                  key={id}
                                >
                                  {underTitle}
                                </li>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </Link>
                </ul>
              );
            })}
          </ul>
        </div>
      
    </div>
  );
}

export default SideScrollBar;

import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import navigationInfo from "./utils/navigationInfo";
import "../styles/SideNavigation.css";

function SideScrollBar({
  toggleMobileNavigation,
  isMobileNavigation,
  stickyMobileNavigation,
}) {
  const [toggleMenu, settoggleMenu] = useState([]);
 
  return (
    <div id="side-navigation">
      {isMobileNavigation ? (
        <div  className="side-navigation-menu-div">
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
                        size={18}
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
      ) : (
        <div
          className={
            toggleMobileNavigation
              ? "side-navigation-menu-div-none"
              : "side-navigation-menu-div-mobile"
          }
        >
          <div
            className={
              stickyMobileNavigation
                ? "side-navigation-menu-div-mobile-sticky"
                : "side-navigation-menu-div-mobile-nested"
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
                          } else
                            settoggleMenu((titles) => [...titles, info.id]);
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
      )}
    </div>
  );
}

export default SideScrollBar;

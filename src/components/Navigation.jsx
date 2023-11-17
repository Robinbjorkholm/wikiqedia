import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNavigation from "./SideNavigation";

import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="navigation-div">
      <div className="hamburger-wikiqedia-div">
        <div className="hamburger-menu">
          <RxHamburgerMenu size={26} />
        </div>
        <div className="wikiqedia-home-a">
          <p className="wikiqedia">Wikiqedia</p>
          <p className="encyclopedia">The free Encyclopedia</p>
        </div>
      </div>
      <SideNavigation />
    </div>
  );
}

export default Navigation;

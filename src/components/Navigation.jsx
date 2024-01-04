import React from "react";
import SideNavigation from "./SideNavigation";

import "../styles/Navigation.css";

function Navigation({
  toggleMobileNavigation,
  settoggleMobileNavigation,
  isMobileNavigation,
  stickyMobileNavigation,
}) {
  return (
    <div className="navigation-div">
      <div className="hamburger-wikiqedia-div">
        <div className="wikiqedia-home-a">
          <p className="wikiqedia">Wikiqedia</p>
          <p className="encyclopedia">The free Encyclopedia</p>
        </div>
      </div>
      <SideNavigation
        stickyMobileNavigation={stickyMobileNavigation}
        isMobileNavigation={isMobileNavigation}
        toggleMobileNavigation={toggleMobileNavigation}
        settoggleMobileNavigation={settoggleMobileNavigation}
      />
    </div>
  );
}

export default Navigation;

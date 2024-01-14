import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import MainContent from "../MainContent";
import Navigation from "../Navigation";

function MainPage() {
  const isMobileNavigation = useMediaQuery({
    query: "(min-width:1001px)",
  });

  const isMobileLayout = useMediaQuery({
    query: "(min-width:691px)",
  });
  const [stickyMobileNavigation, setstickyMobileNavigation] = useState(false);
  const [toggleMobileNavigation, settoggleMobileNavigation] = useState(true);
  return (
    <div>
      {" "}
      <Navigation
        toggleMobileNavigation={toggleMobileNavigation}
        settoggleMobileNavigation={settoggleMobileNavigation}
        isMobileNavigation={isMobileNavigation}
        stickyMobileNavigation={stickyMobileNavigation}
      />
      <MainContent
        stickyMobileNavigation={stickyMobileNavigation}
        setstickyMobileNavigation={setstickyMobileNavigation}
        toggleMobileNavigation={toggleMobileNavigation}
        settoggleMobileNavigation={settoggleMobileNavigation}
        isMobileLayout={isMobileLayout}
        isMobileNavigation={isMobileNavigation}
      />
    </div>
  );
}

export default MainPage;

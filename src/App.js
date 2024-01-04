import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import "./styles/App.css";

function App() {
  const isMobileNavigation = useMediaQuery({
    query: "(min-width:1001px)",
  });

  const isMobileLayout = useMediaQuery({
    query: "(min-width:691px)",
  });
  const [stickyMobileNavigation, setstickyMobileNavigation] = useState(false);
  const [toggleMobileNavigation, settoggleMobileNavigation] = useState(true);

  return (
    <div className="app">
      <div className="app-background">
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
    </div>
  );
}

export default App;

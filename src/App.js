import React from "react";
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

  return (
    <div className="app">
      <div className="app-background">
        <Navigation />
        <MainContent
          isMobileLayout={isMobileLayout}
          isMobileNavigation={isMobileNavigation}
        />
      </div>
    </div>
  );
}

export default App;

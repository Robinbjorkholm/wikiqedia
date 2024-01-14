import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import "./styles/App.css";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div className="app">
      <div className="app-background">
        <Router>
          <Routes>
            <Route exact index element={<Navigate to="/robinbjorkholm" />} />
            <Route exact path="/robinbjorkholm" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/robinbjorkholm" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

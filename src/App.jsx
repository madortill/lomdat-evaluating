import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
// import peer from "./assets/img/logos/peer.svg";
// import madorTil from "./assets/img/logos/till.svg";
import OpeningPage from "./components/OpeningPage/OpeningPage";
import HomePage from "./components/HomePage/HomePage";
import ContentControl from "./components/Content/ContentControl";
import EndPage from "./components/EndPage/EndPage";

import { preloadAssets } from "./utils/preloadAssets";

function App() {

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    preloadAssets().then(() => {
      setAssetsLoaded(true);
    });
  }, []);

  if (!assetsLoaded) {
    return (
      <div className="app-loading">
        <div className="app-loading-spinner" />

        <p>טוענים את הלומדה...</p>
      </div>
    );
  }

  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/content" element={<ContentControl />} />
        <Route path="/end"   element={<EndPage />} />
      </Routes>
    </div>
  );
}

export default App;
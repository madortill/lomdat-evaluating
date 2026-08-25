import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import peer from "./assets/img/logos/peer.svg";
import madorTil from "./assets/img/logos/till.svg";
import OpeningPage from "./components/OpeningPage/OpeningPage";
import HomePage from "./components/HomePage/HomePage";
import Part1 from "./components/Content/Part1/Part1";
import ContentControl from "./components/Content/ContentControl";

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/home"  element={<HomePage />} />
        <Route path="/content" element={<ContentControl />} />
        {/* <Route path="/part1" element={<Part1 />} /> */}
        {/* <Route path="/part2" element={<Part2 />} /> */}
        {/* <Route path="/part3" element={<Part3 />} /> */}
        {/* <Route path="/end"   element={<EndPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
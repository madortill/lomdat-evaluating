import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import peer from "./assets/img/logos/peer.svg";
import madorTil from "./assets/img/logos/till.svg";
import OpeningPage from "./components/OpeningPage/OpeningPage";
// import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <div className="logos">
        <img src={peer} className="peer" alt="logo" />
        <img src={madorTil} className="madorTil" alt="logo" />
      </div>

      <Routes>
        <Route path="/" element={<OpeningPage />} />
        {/* <Route path="/home"  element={<HomePage />} /> */}
        {/* <Route path="/part1" element={<Part1 />} /> */}
        {/* <Route path="/part2" element={<Part2 />} /> */}
        {/* <Route path="/part3" element={<Part3 />} /> */}
        {/* <Route path="/end"   element={<EndPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
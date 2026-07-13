import React from "react";
import { useState } from "react";
import "./App.css";
import peer from "./assets/img/logos/peer.svg";
import madorTil from "./assets/img/logos/till.svg";

function App() {

  return (
    <>
      <div className="app">
        <div className="logos">
          <img src={peer} className="peer" alt="logo" />
          <img src={madorTil} className="madorTil" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default App;

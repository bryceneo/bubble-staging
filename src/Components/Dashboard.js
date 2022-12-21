import React, { useState, useContext } from "react";
import SidePanel from "./SidePanel";
import DataDisplay from "./DataDisplay";
import "./styles/Dashboard.css";
import { Routes, Route } from "react-router-dom";
import Grapher from "./Grapher";
import { AppContext } from "../Context/AppContext";

function Dashboard() {
  const [zoom, SetZoom] = useState(100);
  const [displayGraph, setDisplayGraph] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...useContext(AppContext),
        zoom,
        SetZoom,
        displayGraph,
        setDisplayGraph,
      }}
    >
      <div id="dashboard">
        <SidePanel />
        <Routes>
          <Route path="/" element={<DataDisplay dataId={1} />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default Dashboard;

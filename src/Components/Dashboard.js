import React, { useState } from "react";
import SidePanel from "./SidePanel";
import DataDisplay from "./DataDisplay";
import "./styles/Dashboard.css";
import { Routes, Route } from "react-router-dom";
import Grapher from "./Grapher";

function Dashboard() {
  const [zoom, SetZoom] = useState(100);
  console.log(zoom);

  return (
    <>
      <div id="dashboard">
        <SidePanel SetZoom={SetZoom} />
        <Routes>
          <Route path="/" element={<DataDisplay dataId={1} zoom={zoom} />} />
          <Route
            path="/laurate-details/field-of-study-&-training"
            element={<DataDisplay dataId={2} />}
          />
          <Route
            path="/laurate-details/major-body-of-work"
            element={<DataDisplay dataId={3} />}
          />
          <Route
            path="/laurate-details/influence-impact"
            element={<DataDisplay dataId={4} />}
          />
          <Route
            path="/laurate-details/other-areas"
            element={<DataDisplay dataId={5} />}
          />
          <Route
            path="/laurate-details/:id"
            element={<DataDisplay dataId={2} />}
          />
          <Route
            path="/subject-details/:id"
            element={<DataDisplay dataId={6} />}
          />
          <Route path="/subject-details/:id/all" element={<Grapher />} />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;

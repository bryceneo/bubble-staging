import React from "react";
import SidePanel from "./SidePanel";
import DataDisplay from "./DataDisplay";
import "./styles/Dashboard.css";
import { Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div id="dashboard">
        <SidePanel />
        <Routes>
          <Route path="/" element={<DataDisplay dataId={1} />} />
          <Route path="/second" element={<DataDisplay dataId={2} />} />
          <Route path="/third" element={<DataDisplay dataId={3} />} />
          <Route path="/fourth" element={<DataDisplay dataId={4} />} />
          <Route path="/fifth" element={<DataDisplay dataId={5} />} />
          <Route path="/sixth" element={<DataDisplay dataId={6} />} />
          <Route path="/seventh" element={<DataDisplay dataId={7} />} />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;

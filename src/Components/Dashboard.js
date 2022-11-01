import React from "react";
import SidePanel from "./SidePanel";
import DataDisplay from "./DataDisplay";
import "./styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <div id="dashboard">
        <SidePanel />
        <DataDisplay />
      </div>
    </>
  );
}

export default Dashboard;

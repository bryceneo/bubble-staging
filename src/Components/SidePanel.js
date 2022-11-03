import React from "react";
import Categories from "./Categories";
import ZoomBox from "./ZoomBox";
import "./styles/SidePanel.css";

function SidePanel({ SetZoom }) {
  return (
    <>
      <div id="sidePanel" className="pe-3 pt-5">
        <Categories />
        <ZoomBox SetZoom={SetZoom} />
      </div>
    </>
  );
}

export default SidePanel;

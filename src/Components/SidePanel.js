import React from "react";
import Categories from "./Categories";
import ZoomBox from "./ZoomBox";
import "./styles/SidePanel.css";

function SidePanel({ SetZoom }) {
  return (
    <>
      <div id="sidePanel">
        <Categories />
        <ZoomBox SetZoom={SetZoom} />
      </div>
    </>
  );
}

export default SidePanel;

import React from "react";
import Categories from "./Categories";
import ZoomBox from "./ZoomBox";
import "./styles/SidePanel.css";

function SidePanel() {
  return (
    <>
      <div id="sidePanel">
        <Categories />
        <ZoomBox />
      </div>
    </>
  );
}

export default SidePanel;

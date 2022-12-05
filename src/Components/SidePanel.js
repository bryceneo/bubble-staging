import React from "react";
import Categories from "./Categories";
import ZoomBox from "./ZoomBox";
import "./styles/SidePanel.css";

function SidePanel({ SetZoom, displayGraph }) {
  return (
    <>
      <div id="sidePanel" className="pe-3 pt-4">
        <Categories />
        {!displayGraph && <ZoomBox SetZoom={SetZoom} />}
      </div>
    </>
  );
}

export default SidePanel;

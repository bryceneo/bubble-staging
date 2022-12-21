import React, { useContext } from "react";
import Categories from "./Categories";
import ZoomBox from "./ZoomBox";
import "./styles/SidePanel.css";
import { AppContext } from "../Context/AppContext";

function SidePanel() {
  const { SetZoom, displayGraph, SelectedCategory, setSelectedCategory } =
    useContext(AppContext);

  return (
    <>
      <div id="sidePanel" className="pe-3 pt-4">
        <Categories
          setSelectedCategory={setSelectedCategory}
          SelectedCategory={SelectedCategory}
        />
        {!displayGraph && <ZoomBox SetZoom={SetZoom} />}
      </div>
    </>
  );
}

export default SidePanel;

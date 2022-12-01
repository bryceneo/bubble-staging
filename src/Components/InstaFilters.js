import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/InstaFilters.css";
import CategoriesData from "./Data/CategoriesData";
function InstaFilters({ selectedItem, setSelectedField }) {
  const navigate = useNavigate();
  const color =
    CategoriesData?.find((category) =>
      selectedItem["Prize Category"]?.includes(category?.name)
    )?.colorCode || "";

  const circleStyle = {
    height: "17px",
    width: "17px",
    borderRadius: "10px",
  };
  return (
    <div id="instaFilters">
      <div
        className={"filter"}
        onClick={() => setSelectedField("Field of study and training")}
      >
        <div style={{ ...circleStyle, backgroundColor: color }}></div>
        <div>Field of study and training</div>
      </div>
      <div
        className={"filter"}
        onClick={() => setSelectedField("Major body of work -time of prize")}
      >
        <div style={{ ...circleStyle, border: `1px solid ${color}` }}></div>
        <div>Major Body of work</div>
      </div>
      <div
        className={"filter"}
        onClick={() => setSelectedField("Influence/Impact")}
      >
        <div style={{ ...circleStyle, border: `2px dotted ${color}` }}></div>
        <div>Influence/Impact</div>
      </div>
    </div>
  );
}

export default InstaFilters;

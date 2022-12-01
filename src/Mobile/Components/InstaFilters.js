import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Instafilters.css";
import CategoriesData from "../Data/CategoriesData";
function InstaFilters({ color, setSelectedField }) {
  const navigate = useNavigate();

  const circleStyle = {
    height: "17px",
    width: "17px",
    borderRadius: "10px",
  };
  return (
    <div id="instaFiltersmob">
      <div
        className={"filter-mob"}
        onClick={() => setSelectedField("")}
      >
        <div style={{ ...circleStyle, backgroundColor: "#D8534E" }}></div>
        <div>All</div>
      </div>
      <div
        className={"filter-mob"}
        onClick={() => setSelectedField("Field of study and training")}
      >
        <div style={{ ...circleStyle, backgroundColor: color }}></div>
        <div>Studies</div>
      </div>
      <div
        className={"filter-mob"}
        onClick={() => setSelectedField("Major body of work -time of prize")}
      >
        <div style={{ ...circleStyle, border: "2px solid" + color }}></div>
        <div>Work</div>
      </div>
      <div
        className={"filter-mob"}
        onClick={() => setSelectedField("Influence/Impact")}
      >
        <div style={{ ...circleStyle, border: "2px dashed" + color }}></div>
        <div>Influence</div>
      </div>
    </div>
  );
}

export default InstaFilters;

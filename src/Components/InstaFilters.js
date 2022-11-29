import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/InstaFilters.css";
import CategoriesData from "./Data/CategoriesData";
function InstaFilters({ selectedItem }) {
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
        // onClick={() => navigate("/laurate-details/field-of-study-&-training")}
        className={"filter"}
      >
        <div style={{ ...circleStyle, backgroundColor: color }}></div>
        <div>Field of study & training</div>
      </div>
      <div
        // onClick={() => navigate("/laurate-details/major-body-of-work")}
        className={"filter"}
      >
        <div style={{ ...circleStyle, border: `2px solid ${color}` }}></div>
        <div>Major Body of work</div>
      </div>
      <div
        // onClick={() => navigate("/laurate-details/influence-impact")}
        className={"filter"}
      >
        <div style={{ ...circleStyle, border: `2px dashed ${color}` }}></div>
        <div>Influence/Impact</div>
      </div>
    </div>
  );
}

export default InstaFilters;

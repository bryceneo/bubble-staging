import React from "react";
import { useNavigate } from "react-router-dom";
// import "./styles/InstaFilters.css";

function InstaFilters() {
  const navigate = useNavigate();
  return (
    <div id="instaFilters">
      <div
        onClick={() => navigate("/laurate-details/field-of-study-&-training")}
        className={"filter"}
      >
        All
      </div>
      <div
        onClick={() => navigate("/laurate-details/major-body-of-work")}
        className={"filter"}
      >
        Studies
      </div>
      <div
        onClick={() => navigate("/laurate-details/influence-impact")}
        className={"filter"}
      >
        Work
      </div>
      <div
        onClick={() => navigate("/laurate-details/other-areas")}
        className={"filter"}
      >
        Influence
      </div>
    </div>
  );
}

export default InstaFilters;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/InstaFilters.css";

function InstaFilters() {
  const navigate = useNavigate();
  return (
    <div id="instaFilters">
      <div
        onClick={() => navigate("/laurate-details/field-of-study-&-training")}
        className={"filter"}
      >
        Field of study & training
      </div>
      <div
        onClick={() => navigate("/laurate-details/major-body-of-work")}
        className={"filter"}
      >
        Major Body of work
      </div>
      <div
        onClick={() => navigate("/laurate-details/influence-impact")}
        className={"filter"}
      >
        influence/impact
      </div>
      <div
        onClick={() => navigate("/laurate-details/other-areas")}
        className={"filter"}
      >
        Other Areas
      </div>
    </div>
  );
}

export default InstaFilters;

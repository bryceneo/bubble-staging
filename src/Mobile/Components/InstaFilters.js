import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Instafilters.css";

function InstaFilters() {
  const navigate = useNavigate();
  return (
    <div id="instaFiltersmob">
      <div
        onClick={() => navigate("/laurate-details/field-of-study-&-training")}
        className={"filter-mob"}
      >
        All
      </div>
      <div
        onClick={() => navigate("/laurate-details/major-body-of-work")}
        className={"filter-mob"}
      >
        Studies
      </div>
      <div
        onClick={() => navigate("/laurate-details/influence-impact")}
        className={"filter-mob"}
      >
        Work
      </div>
      <div
        onClick={() => navigate("/laurate-details/other-areas")}
        className={"filter-mob"}
      >
        Influence
      </div>
    </div>
  );
}

export default InstaFilters;

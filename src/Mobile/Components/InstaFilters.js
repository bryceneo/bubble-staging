import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Instafilters.css";

function InstaFilters() {
  const navigate = useNavigate();
  return (
    <div id="instaFiltersmob">
      <div
        onClick={() => navigate("/prize-details/1/all")}
        className={"filter-mob"}
      >
        All
      </div>
      <div
        onClick={() => navigate("/prize-details/1/studies")}
        className={"filter-mob"}
      >
        Studies
      </div>
      <div
        onClick={() => navigate("/prize-details/1/work")}
        className={"filter-mob"}
      >
        Work
      </div>
      <div
        onClick={() => navigate("/prize-details/1/influence")}
        className={"filter-mob"}
      >
        Influence
      </div>
    </div>
  );
}

export default InstaFilters;

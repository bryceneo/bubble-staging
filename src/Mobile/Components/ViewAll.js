import React from "react";
import { Link } from "react-router-dom";
import "./Styles/ViewAll.css";

function ViewAll({ prizeCategory, selectedSubject, setSelectedSubject, mode }) {
  return (
    <button
      className="view-btn"
      onClick={() => setSelectedSubject(prizeCategory)}
    >
      View all laureates in {prizeCategory}
    </button>
  );
}

export default ViewAll;

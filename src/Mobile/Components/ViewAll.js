import React from "react";
import { Link } from "react-router-dom";
import "./Styles/ViewAll.css";

function ViewAll() {
  return (
    <Link to={"/laurates-of-subject/social-science"}>
      <button className="view-btn">
        View all laureates in Social Sciences
      </button>
    </Link>
  );
}

export default ViewAll;

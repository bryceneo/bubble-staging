import React from "react";
import { Link } from "react-router-dom";
import "./Styles/ViewAll.css";

function ViewAll({ prizeCategory }) {
  return (
    <button className="view-btn">View all laureates in {prizeCategory}</button>
  );
}

export default ViewAll;

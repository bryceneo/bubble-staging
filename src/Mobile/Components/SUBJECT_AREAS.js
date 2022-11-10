import React from "react";
import subjectAreas from "../Data/subjectAreas";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";
import "./Styles/Subjectstyle.css";

function Subject_Areas() {
  return (
    <>
      <div className="subject-areas-title text-center p-3">Social Science subject related areas</div>
      <DataDisplay
        data={subjectAreas}
        bubbleOptions={{ numCols: 5 }}
        height={"600px"}
      />
      <Categories />
     <div className="text-center"> <button className="view-btn">View all laureates in Social Sciences</button></div>
    </>
  );
}

export default Subject_Areas;

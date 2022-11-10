import React from "react";
import subjectAreas from "../Data/subjectAreas";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";
import "./Styles/Subjectstyle.css";
import ViewAll from "./ViewAll";

function Subject_Areas() {
  return (
    <>
      <div className="subject-areas-title text-center p-3">Social Science subject related areas</div>
      <DataDisplay
        data={subjectAreas}
        bubbleOptions={{ numCols: 5 }}
        height={"600px"}
      />
      <div className="text-center">
        <Categories />
        <ViewAll />
      </div>
    </>
  );
}

export default Subject_Areas;

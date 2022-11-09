import React from "react";
import subjectAreas from "../Data/subjectAreas";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";

function Subject_Areas() {
  return (
    <>
      <div>Social Science subject related areas</div>
      <DataDisplay data={subjectAreas} numCols={5} />
      <Categories />
      <button>View all laureates in Social Sciences</button>
    </>
  );
}

export default Subject_Areas;

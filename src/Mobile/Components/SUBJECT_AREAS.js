import React from "react";
import subjectAreas from "../Data/subjectAreas";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";

function Subject_Areas() {
  return (
    <>
      <div>Social Science subject related areas</div>
      <DataDisplay
        data={subjectAreas}
        bubbleOptions={{ numCols: 5 }}
        height={"600px"}
      />
      <Categories />
      <button>View all laureates in Social Sciences</button>
    </>
  );
}

export default Subject_Areas;

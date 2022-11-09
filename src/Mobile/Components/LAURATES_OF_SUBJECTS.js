import React from "react";
import laureatesOfSubjects from "../Data/lauratesOfSubjects";
import DataDisplay from "./DataDisplay";
import RangeLine from "./RangeLine";

function Laurates_Of_Subjects() {
  return (
    <>
      <div>Laureates in Social Sciences</div>
      <DataDisplay
        data={laureatesOfSubjects}
        bubbleOptions={{ numCols: 4 }}
        height={"700px"}
      />
      <RangeLine />
    </>
  );
}

export default Laurates_Of_Subjects;

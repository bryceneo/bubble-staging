import React from "react";
import laureatesOfSubjects from "../Data/lauratesOfSubjects";
import DataDisplay from "./DataDisplay";
import RangeLine from "./RangeLine";

function Laurates_Of_Subjects() {
  return (
    <>
      <div className="subject-areas-title grey-text text-center p-3">
        Laureates in Social Sciences
      </div>
      <DataDisplay
        data={laureatesOfSubjects}
        bubbleOptions={{ numCols: 4 }}
        height={"100%"}
      />
      <RangeLine selectedColors={{ color: "#14202E", bgColor: "#F1AC4D" }} />
    </>
  );
}

export default Laurates_Of_Subjects;

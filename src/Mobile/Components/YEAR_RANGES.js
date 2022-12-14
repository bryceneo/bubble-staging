import React from "react";
import yearRanges from "../Data/yearRanges";
import DataDisplay from "./DataDisplay";
import RangeLine from "./RangeLine";

function YEAR_RANGES() {
  return (
    <>
      <div className="subject-areas-title grey-text p-3 text-center">
        Anthropology for the year 2016 - 2020
      </div>
      <DataDisplay
        data={yearRanges}
        bubbleOptions={{ numCols: 4 }}
        height={"100%"}
      />
      <RangeLine selectedColors={{ color: "#FFFFFF", bgColor: "#14202E" }} />
    </>
  );
}

export default YEAR_RANGES;

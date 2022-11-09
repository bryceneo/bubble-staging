import React from "react";
import yearRanges from "../Data/yearRanges";
import DataDisplay from "./DataDisplay";
import RangeLine from "./RangeLine";

function YEAR_RANGES() {
  return (
    <>
      <div>Anthropology for the year 2016 - 2020</div>
      <DataDisplay data={yearRanges} numCols={4} />
      <RangeLine />
    </>
  );
}

export default YEAR_RANGES;

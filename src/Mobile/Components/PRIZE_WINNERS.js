import React from "react";
import { useParams } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import YearLine from "./YearLine";
import prizeWinners2020 from "../Data/prizeWinners2020";
import prizeWinners2019 from "../Data/prizeWinners2019";
import Categories from "./Categories";
import "./Styles/PrizeWinners.css";

function Prize_Winners() {
  let { year } = useParams();
  if (!year) {
    year = "2020";
  }
  let prizeWinners;
  if (year === "2020") prizeWinners = prizeWinners2020;
  else if (year === "2019") prizeWinners = prizeWinners2019;
  else prizeWinners = null;
  return (
    <>
      <div className="prize-winner-title">Prize winners {year}</div>
      <Categories />
      <DataDisplay
        data={prizeWinners}
        bubbleOptions={{ numCols: 4 }}
        height={"100%"}
      />
      <YearLine selectedYear={parseInt(year)} />
    </>
  );
}

export default Prize_Winners;

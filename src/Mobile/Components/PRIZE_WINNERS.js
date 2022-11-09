import React from "react";
import { useParams } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import MobileHeader from "./MobileHeader";
import YearLine from "./YearLine";
import prizeWinners2020 from "../Data/prizeWinners2020";
import Categories from "./Categories";
import "./Styles/PrizeWinners.css";

function Prize_Winners() {
  const { year } = useParams();
  let prizeWinners;
  if (year === "2020") prizeWinners = prizeWinners2020;
  // if(year===2019) prizeWinners = prizeWinners2019
  else prizeWinners = null;
  return (
    <>
      <MobileHeader />
      <div className="prize-winner-title">Prize winners {year}</div>
      <Categories />
      <DataDisplay data={prizeWinners} numCols={4} />
      <YearLine />
    </>
  );
}

export default Prize_Winners;

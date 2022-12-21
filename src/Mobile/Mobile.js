import React from "react";
import FieldRelations from "./Components/FIELD_RELATIONS";
import LauratesOfSubjects from "./Components/LAURATES_OF_SUBJECTS";
import PrizeDetails from "./Components/PRIZE_DETAILS";
import PrizeWinners from "./Components/PRIZE_WINNERS";
import SubjectAreas from "./Components/SUBJECT_AREAS";
import YearRanges from "./Components/YEAR_RANGES";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import prizeDetailsAll from "./Data/prizeDetailsAll";
import prizeDetailsWork from "./Data/prizeDetailsWork";
import prizeDetailsStudies from "./Data/prizeDetailsStudies";
import prizeDetailsInfluence from "./Data/prizeDetailsInfluence";
import DataDisplay from "../Components/DataDisplay";
import FilterHeader from "./Components/FilterHeader";

function Mobile({}) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataDisplay mobileView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Mobile;

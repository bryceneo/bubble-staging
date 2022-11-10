import React from "react";
import CategorySelection from "./Components/CATEGORY_SELECTION";
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
import DataDisplay from "./Components/DataDisplay";
import FilterHeader from "./Components/FilterHeader";

function Mobile() {
  return (
    <>
      <FilterHeader />
      <BrowserRouter>
        <Routes>
          <Route path="prize-winners/:year" element={<PrizeWinners />} />
          <Route path="prize-details/:prizeId" element={<PrizeDetails />}>
            <Route
              path="all"
              element={
                <DataDisplay
                  data={prizeDetailsAll}
                  bubbleOptions={{ numCols: 5 }}
                />
              }
            />
            <Route
              path="studies"
              element={
                <DataDisplay
                  data={prizeDetailsStudies}
                  bubbleOptions={{ numCols: 5 }}
                />
              }
            />
            <Route
              path="work"
              element={
                <DataDisplay
                  data={prizeDetailsWork}
                  bubbleOptions={{ numCols: 5 }}
                />
              }
            />
            <Route
              path="influence"
              element={
                <DataDisplay
                  data={prizeDetailsInfluence}
                  bubbleOptions={{ numCols: 5 }}
                />
              }
            />
          </Route>
          <Route path="subject-areas/:subjectId" element={<SubjectAreas />} />
          <Route path="category-selection" element={<CategorySelection />} />
          <Route path="field-relations/:field" element={<FieldRelations />} />
          <Route path="year-ranges/:range" element={<YearRanges />} />
          <Route
            path="laurates-of-subject/:subject"
            element={<LauratesOfSubjects />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Mobile;

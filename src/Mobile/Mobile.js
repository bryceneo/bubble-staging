import React from "react";
import CategorySelection from "./Components/CATEGORY_SELECTION";
import FieldRelations from "./Components/FIELD_RELATIONS";
import LauratesOfSubjects from "./Components/LAURATES_OF_SUBJECTS";
import LaurateDetails from "./Components/LAURATE_DETAILS";
import PrizeWinners from "./Components/PRIZE_WINNERS";
import SubjectAreas from "./Components/SUBJECT_AREAS";
import YearRanges from "./Components/YEAR_RANGES";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Mobile() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="prize-winners/:year" element={<PrizeWinners />} />
          <Route
            path="laurate-details/:laurateId"
            element={<LaurateDetails />}
          />
          <Route path="subject-areas/:subject" element={<SubjectAreas />} />
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

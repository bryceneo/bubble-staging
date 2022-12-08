import React, { useState } from "react";
import SidePanel from "./SidePanel";
import DataDisplay from "./DataDisplay";
import "./styles/Dashboard.css";
import { Routes, Route } from "react-router-dom";
import Grapher from "./Grapher";

function Dashboard({
  selectedYear,
  SelectedCategory,
  selectedFieldOfStudy,
  majorBodyOfWork,
  InfluenceImpact,
  setSelectedCategory,
  setSubjectForTimeLine
}) {
  const [zoom, SetZoom] = useState(100);
  // console.log(zoom);
  const [displayGraph, setDisplayGraph] = useState(false);

  return (
    <>
      <div id="dashboard">
        <SidePanel
          SetZoom={SetZoom}
          displayGraph={displayGraph}
          SelectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            path="/"
            element={
              <DataDisplay
                dataId={1}
                zoom={zoom}
                selectedYear={selectedYear}
                SelectedCategory={SelectedCategory}
                selectedFieldOfStudy={selectedFieldOfStudy}
                majorBodyOfWork={majorBodyOfWork}
                InfluenceImpact={InfluenceImpact}
                displayGraph={displayGraph}
                setDisplayGraph={setDisplayGraph}
                setSelectedCategory={setSelectedCategory}
                setSubjectForTimeLine={setSubjectForTimeLine}
              />
            }
          />
          {/* <Route
            path="/laurate-details/field-of-study-&-training"
            element={<DataDisplay dataId={2} zoom={zoom} />}
          />
          <Route
            path="/laurate-details/major-body-of-work"
            element={<DataDisplay dataId={3} zoom={zoom} />}
          />
          <Route
            path="/laurate-details/influence-impact"
            element={<DataDisplay dataId={4} zoom={zoom} />}
          />
          <Route
            path="/laurate-details/other-areas"
            element={<DataDisplay dataId={5} zoom={zoom} />}
          />
          <Route
            path="/laurate-details/:id"
            element={<DataDisplay dataId={2} zoom={zoom} />}
          />
          <Route
            path="/subject-details/:id"
            element={<DataDisplay dataId={6} zoom={zoom} />}
          />
          <Route path="/subject-details/:id/all" element={<Grapher />} />
          <Route
            path="/year/:id"
            element={<DataDisplay dataId={"year"} zoom={zoom} />}
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;

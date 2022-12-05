import React, { useState } from "react";
import InstaFilters from "./InstaFilters";
import WinnerCard from "./WinnerCard";
import Categories from "./Categories";
import { Outlet, Route, Routes } from "react-router-dom";
import "./Styles/Fieldrelation.css";
import ViewAll from "./ViewAll";
import DataDisplay from "./DataDisplay";
import prizeDetailsAll from "../Data/prizeDetailsAll";
import CategoriesData from "../../Components/Data/CategoriesData";
// import Data from "../../Components/Data/AllData.json";
import lauratesOfSubjects from "../Data/lauratesOfSubjects";
import Laurates_Of_Subjects from "./LAURATES_OF_SUBJECTS";
import FilterHeader from "./FilterHeader";
function PRIZE_DETAILS({
  selectedItem,
  selectedYear,
  setSelectedItem,
  SelectedCategory,
  selectedFieldOfStudy,
  majorBodyOfWork,
  InfluenceImpact,
  setSelectedCategory,
  setSelectedFieldOfStudy,
  setMajorBodyOfWork,
  setInfluenceImpact,
  setSelectedYear,
}) {
  const color =
    CategoriesData?.find((category) =>
      selectedItem["Prize Category"]?.includes(category?.name)
    )?.colorCode || "";

  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [mode, setMode] = useState("");
  let subjects = [];
  selectedItem["Field of study and training"]?.split(",")?.map((item) => {
    const subject = {
      id: item,
      type: "subject",
      subjectId: "dse23456",

      isRouting: false,
      text: item,
      textColor: "#ffffff",
      borderThickness: "2px",

      backgroundColor: color,
      scaleFactor: 1,
      isActive: true,
      field: "Field of study and training",
    };
    subjects.push(subject);
  });

  selectedItem["Major body of work -time of prize"]?.split(",")?.map((item) => {
    const subject = {
      id: item,
      type: "subject",
      subjectId: item,

      isRouting: false,
      text: item,
      textColor: "#223247",
      borderThickness: "2px",
      borderColor: color,
      backgroundColor: " #FFFFFF5E",
      scaleFactor: 1,
      isActive: true,
      field: "Major body of work -time of prize",
    };
    subjects.push(subject);
  });

  selectedItem["Influence/Impact"]?.split(",")?.map((item) => {
    const subject = {
      id: item,
      type: "subject",
      subjectId: item,

      isRouting: false,
      text: item,
      textColor: "#223247",
      borderThickness: "2px",
      borderColor: color,
      backgroundColor: " #FFFFFF5E",
      borderStyle: "dashed",
      scaleFactor: 1,
      isActive: true,
      field: "Influence/Impact",
    };
    subjects.push(subject);
  });

  return (
    <>
      <FilterHeader
        selectedYear={selectedYear}
        SelectedCategory={SelectedCategory}
        selectedFieldOfStudy={selectedFieldOfStudy}
        majorBodyOfWork={majorBodyOfWork}
        InfluenceImpact={InfluenceImpact}
        setSelectedCategory={setSelectedCategory}
        setSelectedFieldOfStudy={setSelectedFieldOfStudy}
        setMajorBodyOfWork={setMajorBodyOfWork}
        setInfluenceImpact={setInfluenceImpact}
        setSelectedYear={setSelectedYear}
        onBackClick={() =>
          selectedSubject ? setSelectedSubject("") : setSelectedItem(null)
        }
      />

      {selectedSubject ? (
        <Laurates_Of_Subjects
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          color={color}
          mode={mode}
          setMode={setMode}
        />
      ) : (
        <>
          <WinnerCard
            selectedItem={selectedItem}
            selectedYear={selectedYear}
            setSelectedItem={setSelectedItem}
            color={color}
          />
          <InstaFilters setSelectedField={setSelectedField} color={color} />
          <Outlet />
          <div className="text-center">
            <DataDisplay
              data={subjects}
              selectedField={selectedField}
              setSelectedSubject={setSelectedSubject}
              mode={mode}
              setMode={setMode}
            />
            <Categories />
            <ViewAll
              prizeCategory={selectedItem["Prize Category"]?.split("-")[0]}
              selectedSubject={selectedSubject}
              setSelectedSubject={setSelectedSubject}
              // setMode={setMode}
            />
          </div>
        </>
      )}
    </>
  );
}

export default PRIZE_DETAILS;

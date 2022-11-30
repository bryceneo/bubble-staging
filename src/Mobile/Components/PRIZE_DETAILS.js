import React from "react";
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

function PRIZE_DETAILS({ selectedItem, selectedYear, setSelectedItem }) {
  const color =
    CategoriesData?.find((category) =>
      selectedItem["Prize Category"]?.includes(category?.name)
    )?.colorCode || "";

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
    };
    subjects.push(subject);
  });
  // selectedItem["Major body of work -time of prize"]
  //   ?.split(",")
  //   ?.map((item) => subjects.push(item.trim()));
  // selectedItem["Influence/Impact"]
  //   ?.split(",")
  //   ?.map((item) => subjects.push(item.trim()));
  return (
    <>
      <WinnerCard
        selectedItem={selectedItem}
        selectedYear={selectedYear}
        setSelectedItem={setSelectedItem}
      />
      <InstaFilters />
      <Outlet />
      <div className="text-center">
        <Categories />
        <DataDisplay data={subjects} />
        <ViewAll prizeCategory={selectedItem["Prize Category"]}/>
      </div>
    </>
  );
}

export default PRIZE_DETAILS;

import React from "react";
import InstaFilters from "./InstaFilters";
import WinnerCard from "./WinnerCard";
import Categories from "./Categories";
import { Outlet, Route, Routes } from "react-router-dom";
import "./Styles/Fieldrelation.css";
import ViewAll from "./ViewAll";

function PRIZE_DETAILS() {
  return (
    <>
      <WinnerCard />
      <InstaFilters />
      <Outlet />
      <div className="text-center">
        <Categories />
        <ViewAll />
      </div>
    </>
  );
}

export default PRIZE_DETAILS;

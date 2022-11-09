import React from "react";
import InstaFilters from "./InstaFilters";
import WinnerCard from "./WinnerCard";
import Categories from "./Categories";
import { Outlet, Route, Routes } from "react-router-dom";
import "./Styles/Fieldrelation.css";

function PRIZE_DETAILS() {
  return (
    <>
      <WinnerCard />
      <InstaFilters />
      <Outlet />
      <div className="text-center">
      <Categories />
      <button className="view-btn">View all laureates in Social Sciences</button>
      </div>
      
    </>
  );
}

export default PRIZE_DETAILS;

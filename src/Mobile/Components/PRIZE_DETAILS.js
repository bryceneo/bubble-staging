import React from "react";
import InstaFilters from "./InstaFilters";
import WinnerCard from "./WinnerCard";
import Categories from "./Categories";
import { Outlet, Route, Routes } from "react-router-dom";

function PRIZE_DETAILS() {
  return (
    <>
      <WinnerCard />
      <InstaFilters />
      <Outlet />
      <Categories />
      <button>View all laureates in Social Sciences</button>
    </>
  );
}

export default PRIZE_DETAILS;

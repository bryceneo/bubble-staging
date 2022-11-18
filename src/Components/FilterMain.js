import React, { useState, useEffect } from "react";
import Filterfive from "./Filterfive";
import Filterfour from "./Filterfour";
import Filters from "./Filters";
import Filterthree from "./Filterthree";
import Filtertwo from "./Filtertwo";

const FilterMain = () => {
  const [switchBoard, setSwitchBoard] = useState("00000");
  return (
    <>
      <Filters switchBoard={switchBoard} setSwitchBoard={setSwitchBoard} />
      <Filtertwo switchBoard={switchBoard} setSwitchBoard={setSwitchBoard} />
      <Filterthree switchBoard={switchBoard} setSwitchBoard={setSwitchBoard} />
      <Filterfour switchBoard={switchBoard} setSwitchBoard={setSwitchBoard} />
      <Filterfive switchBoard={switchBoard} setSwitchBoard={setSwitchBoard} />
    </>
  );
};

export default FilterMain;

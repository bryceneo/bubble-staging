import React, { useState, useEffect } from "react";
import Filterfive from "./Filterfive";
import Filterfour from "./Filterfour";
import Filters from "./Filters";
import Filterthree from "./Filterthree";
import Filtertwo from "./Filtertwo";

const FilterMain = () => {
  const [switchBoard, setSwitchBoard] = useState("00000");
  const [isClearVisible, setClearVisible] = useState("00000");
  const isVisible = () => {
    console.log("hii");
  };
  useEffect(() => {
    if (isClearVisible === "00000") {
    }
  });

  return (
    <>
      <Filters
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        isClearVisible={isClearVisible}
        setClearVisible={setClearVisible}
      />
      <Filtertwo
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        isClearVisible={isClearVisible}
        setClearVisible={setClearVisible}
      />
      <Filterthree
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        isClearVisible={isClearVisible}
        setClearVisible={setClearVisible}
      />
      <Filterfour
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        isClearVisible={isClearVisible}
        setClearVisible={setClearVisible}
      />
      <Filterfive
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        isClearVisible={isClearVisible}
        setClearVisible={setClearVisible}
      />

      <div className="col-lg-2 text-end">
        <button className="clear-filter" onClick={isVisible}>
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default FilterMain;

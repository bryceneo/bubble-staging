import React, { useState, useEffect } from "react";
import Filterfive from "./Filterfive";
import Filterfour from "./Filterfour";
import Filters from "./Filters";
import Filterthree from "./Filterthree";
import Filtertwo from "./Filtertwo";

const FilterMain = () => {
  const defaultOptions = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };
  const [switchBoard, setSwitchBoard] = useState("00000");
  const [selectedOptions, setSelectedOptions] = useState(defaultOptions);
  const [isClearVisible, setClearVisible] = useState(true);
  useEffect(() => {
    const optionsCheck = Object.entries(selectedOptions).every(
      ([key, value]) => {
        return value === 0;
      }
    );
    if (optionsCheck) {
      setClearVisible(true);
    } else {
      setClearVisible(false);
    }
  }, [selectedOptions]);

  const handleClear = () => {
    setSelectedOptions(defaultOptions);
  };

  return (
    <>
      <Filters
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <Filtertwo
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <Filterthree
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <Filterfour
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <Filterfive
        switchBoard={switchBoard}
        setSwitchBoard={setSwitchBoard}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />

      <div className="col-lg-2 text-end">
        <button
          className="clear-filter"
          hidden={isClearVisible}
          onClick={handleClear}
        >
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default FilterMain;

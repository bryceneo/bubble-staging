import React, { useState } from "react";
import "./styles/Filters.css";

import Data from "./Data/AllData.json";
import { useEffect } from "react";

const Filterfive = ({ setSelectedYear, selectedYear }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const optionsList = [
    "Select Year",
    ...Array.from(
      new Set(Data?.Database?.map((item) => item?.["Infosys Prize"]))
    ),
  ];

  const toggleOptions = () => {
    // setIsOptionsOpen(true);
    if (switchBoard == "00001") {
      setSwitchBoard("00000");
      // console.log("reseting switch board");
    } else {
      setSwitchBoard("00001");
      // console.log("setting Switch board for first");
    }
  };
  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedOption(index);
        setIsOptionsOpen(false);
        break;
      default:
        break;
    }
  };
  return (
    <div id="filters">
      <div className="select-wrapper">
        <span className="sort-label">Year</span>
        <button
          id="select-btn"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? "expanded" : ""}
          onClick={toggleOptions}
        >
          {/* {optionsList[selectedOption]} */}
          {selectedYear || "Select Year"}
        </button>
        <ul
          className={`options ${isOptionsOpen ? "show" : ""}`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
        >
          {optionsList.map((option, index) => (
            <li
              id={option}
              role="option"
              aria-selected={selectedOption == index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedYear(option);
                setSelectedOption(index);
                setIsOptionsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filterfive;

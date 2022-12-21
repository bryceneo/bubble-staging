import React, { useState, useContext } from "react";
import "./styles/Filters.css";
import Data from "./Data/AllData.json";
import { useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { AppContext } from "../Context/AppContext";

const Filterfive = () => {
  const { selectedYear, setSelectedYear } = useContext(AppContext);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const ref = useDetectClickOutside({
    onTriggered: () => setIsOptionsOpen(false),
  });
  const optionsList = [
    ...Array.from(
      new Set(Data?.Database?.map((item) => item?.["Infosys Prize"]))
    ),
    "custom range",
  ];

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  const handleKeyDown = (index) => (e) => {
    // localStorage.setItem("selection", "dropdown");
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

  // console.log("################");

  return (
    <div id="filters">
      <div className="select-wrapper" ref={ref}>
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
              key={index}
              role="option"
              aria-selected={selectedOption == index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedYear(option);
                // setSelectedYearRange([]);
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

export default React.memo(Filterfive);

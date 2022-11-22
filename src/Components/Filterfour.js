import React, { useState, useEffect } from "react";
import "./styles/Filters.css";

const Filterfour = ({ switchBoard, setSwitchBoard }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const optionsList = [
    "Molecular Chemistry",
    "Archaeology",
    "Theoretical Linguistics",
    "Biochemistry",
    "Database Optimization",
  ];
  useEffect(() => {
    if (switchBoard == "00010") {
      setIsOptionsOpen(true);
      // console.log("First is on");
    } else {
      setIsOptionsOpen(false);
      // console.log("First is off");
    }
    if (switchBoard == "00000") {
      setSelectedOption(0);
    }
  }, [switchBoard]);
  const toggleOptions = () => {
    // setIsOptionsOpen(true);
    if (switchBoard == "00010") {
      setSwitchBoard("00000");
      // console.log("reseting switch board");
    } else {
      setSwitchBoard("00010");
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
        <span className="sort-label">Influence/Impact</span>
        <button
          id="select-btn"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? "expanded" : ""}
          onClick={toggleOptions}
        >
          {optionsList[selectedOption]}
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

export default Filterfour;

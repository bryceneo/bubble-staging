import React, { useState } from "react";
import "./styles/Filters.css";
import Data from "./Data/AllData.json";
import { useDetectClickOutside } from "react-detect-click-outside";

function Filters({ SelectedCategory, setSelectedCategory }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => setIsOptionsOpen(false),
  });
  const [selectedOption, setSelectedOption] = useState(0);
  const optionsList = [
    "Select Category",
    "Social Sciences",
    "Physical Sciences",
    "Mathematical Sciences",
    "Life Sciences",
    "Humanities",
    "Engineering and Computer Science",
  ];
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
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
      <div className="select-wrapper" ref={ref}>
        <span className="sort-label">Category</span>
        <button
          id="select-btn"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? "expanded" : ""}
          onClick={toggleOptions}
        >
          {/* {optionsList[selectedOption]} */}
          {SelectedCategory || "Select Category"}
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
                setSelectedCategory(option === "Select Category" ? "" : option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filters;

import React, { useState, useEffect } from "react";
import "./styles/Filters.css";

function Filters({
  switchBoard,
  setSwitchBoard,
  isClearVisible,
  setClearVisible,
}) {
  // console.log(switchBoard, setSwitchBoard, "hii");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    if (switchBoard == "10000") {
      setIsOptionsOpen(true);
      // console.log("First is on");
    } else {
      setIsOptionsOpen(false);
      // console.log("First is off");
    }
  }, [switchBoard]);
  const toggleOptions = () => {
    // setIsOptionsOpen(true);
    if (switchBoard == "10000") {
      setSwitchBoard("00000");
      // console.log("reseting switch board");
    } else {
      setSwitchBoard("10000");
      // console.log("setting Switch board for first");
    }
  };
  const optionsList = [
    "Select Category",
    "Social Science",
    "Physical Sciences",
    "Mathematical Sciences",
    "Life Sciences",
    "Humanities",
  ];

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedOption(index);
        setSwitchBoard("00000");
        // setIsOptionsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div id="filters">
      <div className="select-wrapper">
        <span className="sort-label">Category</span>
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
              key={index}
              id={option}
              role="option"
              aria-selected={selectedOption == index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedOption(index);
                // setIsOptionsOpen(false);
                setSwitchBoard("00000");
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

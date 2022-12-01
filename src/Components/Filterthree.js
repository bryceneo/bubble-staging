import React, { useState } from "react";
import "./styles/Filters.css";
import Data from "./Data/AllData.json";
import { useDetectClickOutside } from "react-detect-click-outside";
const Filterthree = ({ majorBodyOfWork, setMajorBodyOfWork }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const ref = useDetectClickOutside({
    onTriggered: () => setIsOptionsOpen(false),
  });
  const optionsList = [
    "Select Body of work",
    ...Array.from(
      new Set(
        Data?.Database?.map((item) =>
          item?.["Major body of work -time of prize"]
            ?.split(",")
            ?.map((item) => item.trim())
        )?.flat(10)
      )
    ),
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
    <div id="filters" >
      <div className="select-wrapper" ref={ref}>
        <span className="sort-label">Major body of work</span>
        <button
          id="select-btn"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? "expanded" : ""}
          onClick={toggleOptions}
        >
          {majorBodyOfWork || "Select Body of work"}
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
                setSelectedOption(index);
                setMajorBodyOfWork(option === "Select Body of work" ? "" : option);
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

export default Filterthree;

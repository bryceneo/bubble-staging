import React, { useState, useEffect } from "react";
import "./styles/Filters.css";

const Filterthree = ({
  switchBoard,
  setSwitchBoard,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const optionsList = [
    "Select Major Body Of Work",
    " Plant Genetics",
    " Polymer Science ",
    " Material Engineering",
    " Cell  Biology",
    "  Biophysics ",
    "Supramolecular Chemistry",
  ];
  useEffect(() => {
    setSelectedOptions((prev) => ({ ...prev, three: selectedOption }));
  }, [selectedOption]);
  useEffect(() => {
    if (selectedOptions.three == 0) setSelectedOption(0);
  }, [selectedOptions]);
  useEffect(() => {
    if (switchBoard == "00100") {
      setIsOptionsOpen(true);
      // console.log("three is on");
    } else {
      setIsOptionsOpen(false);
      // console.log("three is off");
    }
  }, [switchBoard]);
  const toggleOptions = () => {
    // setIsOptionsOpen(true);
    if (switchBoard == "00100") {
      setSwitchBoard("00000");
      // console.log("reseting switch board");
    } else {
      setSwitchBoard("00100");
      // console.log("setting Switch board for first");
    }
  };
  // const toggleOptions = () => {
  //   setIsOptionsOpen(!isOptionsOpen);
  // };
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
        <span className="sort-label">Major body of work</span>
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

export default Filterthree;

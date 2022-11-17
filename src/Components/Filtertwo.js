import React, {
  useState
} from "react";
import "./styles/Filters.css";


const Filtertwo = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const optionsList = [
    " Anthropology",
    " Anthropology ",
    " Anthropology ",
    " Anthropology ",
    " Anthropology ",
    " Anthropology "
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
    <div className="select-wrapper">
   
   <span className="sort-label">Field of Study</span>
  <button id="select-btn"
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

  )
}

export default Filtertwo
import React, { useState } from "react";
import laureatesOfSubjects from "../Data/lauratesOfSubjects";
import DataDisplay from "./DataDisplay";
import RangeLine from "./RangeLine";
import Data from "../../Components/Data/AllData.json";
function Laurates_Of_Subjects({ selectedSubject, setSelectedSubject }) {
  const laurates = [];
  const [startDate, setStartDate] = useState(2008);
  const [endDate, setEndDate] = useState(startDate + 4);

  const checkSubjectInLaurate = (person) => {
    return (
      (person["Prize Category"]?.includes(selectedSubject) ||
        person["Field of study and training"]?.includes(selectedSubject) ||
        person["Major body of work -time of prize"]?.includes(
          selectedSubject
        ) ||
        person["Influence/Impact"]?.includes(selectedSubject)) &&
      person["Infosys Prize"] >= startDate &&
      person["Infosys Prize"] <= endDate
    );
  };
  Data?.Database?.filter((person) => checkSubjectInLaurate(person))?.map(
    (person) => {
      const node = {
        id: 1,
        type: "person",
        laurateId: person?.Name,

        isRouting: false,
        text: "",
        image: "images/" + person?.Name + ".jpg",
        textColor: "#223247",
        borderThickness: "4px",
        borderColor: "#223347",
        backgroundColor: " #FFFFFF5E",
        scaleFactor: 1,
        isActive: true,
        alt: person?.Name,
      };
      laurates.push(node);
    }
  );
  return (
    <>
      <div className="subject-areas-title grey-text text-center p-3">
        Laureates in {selectedSubject}
      </div>
      {/* <button className="m-2" onClick={() => setSelectedSubject("")}>Back</button> */}
      <DataDisplay
        data={laurates}
        bubbleOptions={{ numCols: 4 }}
        height={"100%"}
      />
      <RangeLine
        selectedColors={{ color: "#14202E", bgColor: "#F1AC4D" }}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate} 
      />
    </>
  );
}

export default Laurates_Of_Subjects;

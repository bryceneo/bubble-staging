import React, { useEffect, useState } from "react";
import laureatesOfSubjects from "../Data/lauratesOfSubjects";
import DataDisplay from "./DataDisplay";
import RangeLine from "./RangeLine";
import Data from "../../Components/Data/AllData.json";
import ViewAll from "./ViewAll";
function Laurates_Of_Subjects({
  selectedSubject,
  setSelectedSubject,
  color,
  mode,
  setMode,
}) {
  const laurates = [];
  const [startDate, setStartDate] = useState(2008);
  const [endDate, setEndDate] = useState(startDate + 4);
  let [subjects, setSubjects] = useState([]);

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
  const NoDataNode = {
    id: "No Data found",
    type: "subject",
    // subjectId: "dse23456",

    isRouting: false,
    text: "No Data found",
    textColor: "#ffffff",
    borderThickness: "2px",
    // borderColor:
    backgroundColor: "#14202E",
    scaleFactor: 1,
    isActive: true,
    // field: "Field of study and training",
  };
  useEffect(() => {
    if (mode === "subjects") {
      let subjects = [];

      Data?.Database?.filter((person) => {
        return (
          person["Prize Category"]?.includes(selectedSubject) ||
          person["Field of study and training"]?.includes(selectedSubject) ||
          person["Major body of work -time of prize"]?.includes(
            selectedSubject
          ) ||
          person["Influence/Impact"]?.includes(selectedSubject)
        );
      })?.map((person) => {
        person["Field of study and training"]
          ?.split(",")
          ?.map((item) => subjects.push(item?.trim()));
        person["Major body of work -time of prize"]
          ?.split(",")
          ?.map((item) => subjects?.push(item?.trim()));
        person["Influence/Impact"]
          ?.split(",")
          ?.map((item) => subjects?.push(item?.trim()));
      });
      subjects = Array.from(new Set(subjects))?.filter(
        (item) => !selectedSubject?.includes(item)
      );
      subjects.splice(subjects.length / 3, 0, selectedSubject);
      subjects = subjects.map((item) => {
        const node = {
          id: item,
          type: "subject",
          // subjectId: "dse23456",

          isRouting: false,
          text: item,
          textColor: selectedSubject?.includes(item) ? "#ffffff" : "#000000",
          borderThickness: "2px",
          // borderColor:
          backgroundColor: selectedSubject?.includes(item)
            ? color
            : "#C7C7C75E",
          scaleFactor: 1,
          isActive: true,
          // field: "Field of study and training",
        };
        return node;
      });
      // console.log(subjects, "subjects");
      if (subjects?.length) setSubjects(subjects);
      else {
        setSubjects([NoDataNode]);
      }
    }
    // console.log(mode, "mode1");
  }, [mode, selectedSubject]);
  return (
    <>
      {mode !== "subjects" ? (
        <div className="subject-areas-title grey-text text-center p-3">
          Laureates in {selectedSubject}
        </div>
      ) : (
        <div className="subject-areas-title  text-center p-3">
          {selectedSubject} related subject areas
        </div>
      )}
      {/* <button className="m-2" onClick={() => setSelectedSubject("")}>Back</button> */}
      <DataDisplay
        data={
          mode === "subjects"
            ? subjects
            : laurates?.length
            ? laurates
            : [NoDataNode]
        }
        bubbleOptions={{ numCols: 4 }}
        height={"100%"}
        setSelectedSubject={setSelectedSubject}
        setMode={setMode}
        selectedSubject={selectedSubject}
        color={color}
      />
      {mode !== "subjects" ? (
        <RangeLine
          selectedColors={{ color: "#14202E", bgColor: "#F1AC4D" }}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      ) : (
        <div className="d-flex justify-content-center">
          <ViewAll
            prizeCategory={selectedSubject}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            mode="subjects"
            setMode={setMode}
          />
        </div>
      )}
    </>
  );
}

export default Laurates_Of_Subjects;

import React, { useEffect, useState } from "react";
import "./styles/DataDisplay.css";
import first from "./Data/home";
import second from "./Data/laurateDetails";
import third from "./Data/majorBodyOfWork";
import fourth from "./Data/influenceImpact";
import fifth from "./Data/otherAreas";
import sixth from "./Data/subjectDetails";
import year2010 from "./Data/year2010";
import year2012 from "./Data/year2012";
import year2013 from "./Data/year2013";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";
import InstaFilters from "./InstaFilters";
import { useLocation, useNavigate } from "react-router-dom";
import data from "./Data/AllData.json";
import { shuffleArrayElements } from "../utilities";
import Grapher from "./Grapher";
import { getRelatedSubjects } from "./utilities";
import Categories from "./Categories";
function DataDisplay({
  dataId,
  zoom,
  selectedYear,
  SelectedCategory,
  selectedFieldOfStudy,
  majorBodyOfWork,
  InfluenceImpact,
  mobileView,
}) {
  const [topPanel, setTopPanel] = useState(undefined);
  const [selectedItem, setSelectedItem] = useState(null);
  const [subjectFilter, setSubjectFilter] = useState("");
  const [displayGraph, setDisplayGraph] = useState(false);
  const { state } = useLocation();
  const [shiffledList, setShuffledList] = useState(null);
  const [relatedSubjects, setRelatedSubjects] = useState([]);
  const { subId, subText } = state ? state : { subId: "", subText: "" };
  const navigate = useNavigate();
  let Winners = data?.Database;
  // const fieldsOfStudy =
  // console.log(Winners,"Winners")

  if (selectedYear) {
    const newWinners = Winners?.filter(
      (item) => item["Infosys Prize"] === selectedYear
    );
    Winners = newWinners;
  }

  if (SelectedCategory) {
    const newWinners = Winners?.filter((item) =>
      item["Prize Category"].includes(SelectedCategory)
    );
    Winners = newWinners;
  }

  if (selectedFieldOfStudy) {
    const newWinners = Winners?.filter((item) =>
      item["Field of study and training"].includes(selectedFieldOfStudy)
    );
    Winners = newWinners;
  }

  if (majorBodyOfWork) {
    const newWinners = Winners?.filter((item) =>
      item["Major body of work -time of prize"].includes(majorBodyOfWork)
    );
    Winners = newWinners;
  }

  if (InfluenceImpact) {
    const newWinners = Winners?.filter((item) =>
      item["Influence/Impact"].includes(InfluenceImpact)
    );
    Winners = newWinners;
  }

  let subjects = Array.from(
    new Set(
      Winners?.map((item) => {
        const subjects = [];
        item?.["Field of study and training"]?.split(",")?.map((item) => {
          subjects.push(item.trim());
        });
        item?.["Major body of work -time of prize"]?.split(",")?.map((item) => {
          subjects.push(item.trim());
        });
        item?.["Influence/Impact"]?.split(",")?.map((item) => {
          subjects.push(item);
        });
        return subjects;
      })?.flat(5)
    )
  );

  useEffect(() => {
    const newShuffledList = shuffleArrayElements([
      ...Winners,
      selectedYear,
      ...subjects,
    ]);
    setShuffledList(Array.from(new Set(newShuffledList)));
  }, [
    selectedYear,
    SelectedCategory,
    selectedFieldOfStudy,
    majorBodyOfWork,
    InfluenceImpact,
  ]);

  useEffect(() => {
    if (selectedItem && !selectedItem?.Name) {
      const relatedSubjects = getRelatedSubjects(selectedItem, Winners);
      setRelatedSubjects(relatedSubjects);
    }
  }, [selectedItem]);

  let subjectNav = (
    <div className="subject-title" onClick={() => setDisplayGraph(true)}>
      Show all laureates in {selectedItem}
    </div>
  );

  // console.log(selectedItem, "selectedItem");

  const options = {
    size: 180,
    // size: zoom,
    minSize: 40,
    gutter: -65,
    provideProps: true,
    numCols: 9,
    fringeWidth: 500,
    yRadius: 200,
    xRadius: 200,
    cornerRadius: 0,
    showGuides: false,
    compact: true,
    gravitation: 1,
  };

  const Mobileoptions = {
    size: 180,
    // size: zoom,
    minSize: 30,
    gutter: -77,
    provideProps: true,
    numCols: 4,
    fringeWidth: 500,
    yRadius: 50,
    xRadius: 50,
    cornerRadius: 0,
    showGuides: false,
    compact: true,
    gravitation: 1,
  };
  // console.log("subjects",subjects);
  // console.log("winners", Winners);

  // console.log(typeof(Winners),"typeof(subjects)");
  // console.log(subjects.splice.apply(subjects, [2, 0].concat(Winners)),"dwfsdasdadas");

  const children = shiffledList?.map((item, index) => {
    return (
      <Child
        className="child"
        key={index}
        params={item}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        selectedYear={selectedYear}
        relatedSubjects={relatedSubjects}
      />
    );
  });

  // console.log(Array.from(fieldsOfStudy), "Winners.concat(fieldsOfStudy)");

  const scaleValue = zoom / 3 + 1.01;
  // const marginValue = `${zoom * 3}em`;

  return (
    <>
      {displayGraph ? (
        <>
          <Grapher
            selectedItem={selectedItem}
            relatedSubjects={relatedSubjects}
            setDisplayGraph={setDisplayGraph}
          />
        </>
      ) : (
        <div id="dataDisplay">
          {/* {topPanel} */}
          {selectedItem?.Name && !mobileView && <InstaFilters selectedItem={selectedItem} />}
          {selectedItem && !selectedItem?.Name && !mobileView && subjectNav}
          {mobileView && (
            <>
              <div className="prize-winner-title">
                Prize winners {selectedYear}
              </div>
              <Categories mobileView />
            </>
          )}
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <div
              style={{
                scale: `${scaleValue}`,
                // padding: `${marginValue}`,
              }}
            >
              <BubbleUI
                options={mobileView ? Mobileoptions : options}
                className="myBubbleUI"
              >
                {children}
              </BubbleUI>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DataDisplay;

import React, { useEffect, useState, useContext } from "react";
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
import YearLine from "../Mobile/Components/YearLine";
import PRIZE_DETAILS from "../Mobile/Components/PRIZE_DETAILS";
import FilterHeader from "../Mobile/Components/FilterHeader";
import MobileCategories from "../Mobile/Components/Categories";
import { AppContext } from "../Context/AppContext";

function DataDisplay({ mobileView }) {
  const {
    zoom,
    selectedYear,
    setSelectedYear,
    selectedYearRange,
    setSelectedFieldOfStudy,
    setMajorBodyOfWork,
    setInfluenceImpact,
    SelectedCategory,
    selectedFieldOfStudy,
    majorBodyOfWork,
    InfluenceImpact,
    displayGraph,
    setDisplayGraph,
    setSelectedCategory,
  } = useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [shiffledList, setShuffledList] = useState(null);
  const [relatedSubjects, setRelatedSubjects] = useState([]);
  const [selectedField, setSelectedField] = useState("");

  const scaleValue = zoom / 3 + 1.01;

  let Winners = data?.Database;

  if (typeof selectedYear === "number") {
    const newWinners = Winners?.filter(
      (item) => item["Infosys Prize"] === selectedYear
    );
    Winners = newWinners;
  } else {
    let winnersList = [];
    for (let i = selectedYearRange[0]; i <= selectedYearRange[1]; i++) {
      const newWinners = Winners?.filter((item) => item["Infosys Prize"] === i);
      // yearLength.push(i);
      winnersList = [...winnersList, ...newWinners];
      winnersList = Array.from(new Set(winnersList));
    }
    Winners = winnersList;
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
    // console.log("newShuffledList   ------>>>>>>>>>>    ", newShuffledList);
    if (newShuffledList?.length > 1)
      setShuffledList(Array.from(new Set(newShuffledList)));
    else {
      setShuffledList(["No Data Found"]);
    }
  }, [
    selectedYear,
    selectedYearRange,
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

  const options = {
    size: 98,
    // size: zoom,
    minSize: 58,
    gutter: 15,
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
    size: 95,
    // size: zoom,
    minSize: 40,
    gutter: 10,
    provideProps: true,
    numCols: 4,
    fringeWidth: 350,
    yRadius: 50,
    xRadius: 50,
    cornerRadius: 0,
    showGuides: false,
    compact: true,
    gravitation: 1,
  };

  const children = shiffledList?.map((item, index) => {
    // console.log("A: item", item, item?.Name);
    return (
      <Child
        key={index}
        params={item}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        selectedField={selectedField}
        setSelectedField={setSelectedField}
        relatedSubjects={relatedSubjects}
        // mobileView={mobileView}
      />
    );
  });

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
          {selectedItem?.Name && !mobileView && (
            <InstaFilters
              selectedItem={selectedItem}
              setSelectedField={setSelectedField}
            />
          )}
          {/* {selectedItem && !selectedItem?.Name && !mobileView && subjectNav} */}
          {mobileView && !selectedItem?.Name && (
            <>
              <FilterHeader
                selectedYear={selectedYear}
                SelectedCategory={SelectedCategory}
                selectedFieldOfStudy={selectedFieldOfStudy}
                majorBodyOfWork={majorBodyOfWork}
                InfluenceImpact={InfluenceImpact}
                setSelectedCategory={setSelectedCategory}
                setSelectedFieldOfStudy={setSelectedFieldOfStudy}
                setMajorBodyOfWork={setMajorBodyOfWork}
                setInfluenceImpact={setInfluenceImpact}
                setSelectedYear={setSelectedYear}
                // onBackClick={() => setSelectedItem(null)}
                totalItems={Winners?.length || 0}
              />
              <div className="prize-winner-title">
                Prize winners {selectedYear}
              </div>
              {mobileView ? <MobileCategories /> : <Categories />}
            </>
          )}

          {mobileView && selectedItem?.Name ? (
            <PRIZE_DETAILS
              selectedItem={selectedItem}
              selectedYear={selectedYear}
              setSelectedItem={setSelectedItem}
              SelectedCategory={SelectedCategory}
              selectedFieldOfStudy={selectedFieldOfStudy}
              majorBodyOfWork={majorBodyOfWork}
              InfluenceImpact={InfluenceImpact}
              setSelectedCategory={setSelectedCategory}
              setSelectedFieldOfStudy={setSelectedFieldOfStudy}
              setMajorBodyOfWork={setMajorBodyOfWork}
              setInfluenceImpact={setInfluenceImpact}
              setSelectedYear={setSelectedYear}
            />
          ) : shiffledList?.length > 1 ? (
            <div
              style={{
                overflow: "hidden",
              }}
            >
              {/* {mobileView && selectedItem?.Name && <PRIZE_DETAILS />} */}

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
              {mobileView && (
                <YearLine
                  setSelectedYear={setSelectedYear}
                  selectedYear={selectedYear}
                />
              )}
            </div>
          ) : (
            <div
              className="no-data-title"
              // onClick={() => setDi splayGraph(true)}
            >
              No Data found
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DataDisplay;

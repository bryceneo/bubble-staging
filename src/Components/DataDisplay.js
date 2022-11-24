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
function DataDisplay({
  dataId,
  zoom,
  selectedYear,
  SelectedCategory,
  selectedFieldOfStudy,
  majorBodyOfWork,
  InfluenceImpact,
}) {
  const [topPanel, setTopPanel] = useState(undefined);
  const [selectedItem, setSelectedItem] = useState(null);
  const { state } = useLocation();
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
      item[" Field of study and training "].includes(selectedFieldOfStudy)
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

  const fieldsOfStudy = new Set(
    data?.Database?.map((item) =>
      item?.[" Field of study and training "]
        ?.split(",")
        ?.map((item) => item.trim())
    ).flat(3)
  );

  // let data;
  // if (dataId === 1) data = first;
  // if (dataId === 2) data = second;
  // if (dataId === 3) data = third;
  // if (dataId === 4) data = fourth;
  // if (dataId === 5) data = fifth;
  // if (dataId === 6) data = sixth;
  // if (dataId === "year") {
  //   const { year } = state;
  //   if (year === 2010) data = year2010;
  //   if (year === 2012) data = year2012;
  //   if (year === 2013) data = year2013;
  // }

  let subjectNav = (
    <div
      className="subject-title"
      onClick={() => navigate(`/subject-details/${subId}/all`)}
    >
      Show all laureates in {subText}
    </div>
  );

  // useEffect(() => {
  //  if(selectedYear)

  // }, [selectedYear]);

  const options = {
    size: 180,
    // size: zoom,
    minSize: 30,
    gutter: -77,
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

  console.log(Winners, "Winners");

  const children = shuffleArrayElements([
    ...Winners,
    ...Array.from(fieldsOfStudy),
  ]).map((item) => {
    return (
      <Child
        className="child"
        key={item.id}
        params={item}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    );
  });

  // console.log(Array.from(fieldsOfStudy), "Winners.concat(fieldsOfStudy)");

  const scaleValue = zoom / 3 + 1.01;
  // const marginValue = `${zoom * 3}em`;

  return (
    <div id="dataDisplay">
      {topPanel}
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
          <BubbleUI options={options} className="myBubbleUI">
            {children}
          </BubbleUI>
        </div>
      </div>
    </div>
  );
}

export default DataDisplay;

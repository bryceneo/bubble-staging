import React, { useEffect, useState } from "react";
import "./styles/DataDisplay.css";
import first from "./Data/first";
import second from "./Data/second";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";
import InstaFilters from "./InstaFilters";
import { useLocation, useNavigate } from "react-router-dom";

function DataDisplay({ dataId }) {
  const [topPanel, setTopPanel] = useState(undefined);
  const { state } = useLocation();
  const { subId, subText } = state ? state : { subId: "", subText: "" };
  const navigate = useNavigate();

  let data;
  if (dataId === 1) data = first;
  if (dataId === 2) data = second;
  if (dataId === 3) data = second;
  if (dataId === 4) data = second;
  if (dataId === 5) data = second;
  if (dataId === 6) data = second;

  let subjectNav = (
    <div onClick={() => navigate(`/subject-details/${subId}/all`)}>
      Show all laureates in {subText}
    </div>
  );

  useEffect(() => {
    if (dataId === 1) setTopPanel(undefined);
    else if (dataId === 6) setTopPanel(subjectNav);
    else setTopPanel(<InstaFilters />);
  }, [dataId, subjectNav]);

  const options = {
    size: 180,
    minSize: 30,
    gutter: -45,
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
  const children = data.map((item) => {
    return <Child className="child" key={item.id} params={item} />;
  });
  return (
    <div id="dataDisplay">
      {topPanel}
      <BubbleUI options={options} className="myBubbleUI">
        {children}
      </BubbleUI>
    </div>
  );
}

export default DataDisplay;

import React, { useEffect, useState } from "react";
import "./styles/DataDisplay.css";
import first from "./Data/first";
import second from "./Data/second";
import third from "./Data/third";
import fourth from "./Data/fourth";
import fifth from "./Data/fourth";
import sixth from "./Data/fourth";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";
import InstaFilters from "./InstaFilters";
import { useLocation, useNavigate } from "react-router-dom";

function DataDisplay({ dataId, zoom }) {
  const [topPanel, setTopPanel] = useState(undefined);
  const { state } = useLocation();
  const { subId, subText } = state ? state : { subId: "", subText: "" };
  const navigate = useNavigate();

  let data;
  if (dataId === 1) data = first;
  if (dataId === 2) data = second;
  if (dataId === 3) data = third;
  if (dataId === 4) data = fourth;
  if (dataId === 5) data = fifth;
  if (dataId === 6) data = sixth;

  let subjectNav = (
    <div className="subject-title" onClick={() => navigate(`/subject-details/${subId}/all`)}>
      Show all laureates in {subText}
      <i class="fas fa-arrow-right"></i>
    </div>
  );

  useEffect(() => {
    if (dataId === 1) setTopPanel(undefined);
    else if (dataId === 6) setTopPanel(subjectNav);
    else setTopPanel(<InstaFilters />);
  }, [dataId, subjectNav]);

  const options = {
    size: 180,
    // size: zoom,
    minSize: 30,
    gutter: -70,
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
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            scale: `${zoom ? ((zoom + 1) / 100) * 20 : 1}`,
            padding: `${zoom > 7 ? 9 : 1}em`,
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

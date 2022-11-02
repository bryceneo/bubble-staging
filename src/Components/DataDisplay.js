import React, { useState } from "react";
import "./styles/DataDisplay.css";
import first from "./Data/first";
import second from "./Data/second";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";

function DataDisplay({ dataId }) {
  let data;
  if (dataId === 1) data = first;
  if (dataId === 2) data = second;
  if (dataId === 3) data = first;
  if (dataId === 4) data = first;
  if (dataId === 5) data = first;
  if (dataId === 6) data = first;

  const options = {
    size: 180,
    minSize: 130,
    gutter: -45,
    provideProps: true,
    numCols: 8,
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
      <BubbleUI options={options} className="myBubbleUI">
        {children}
      </BubbleUI>
    </div>
  );
}

export default DataDisplay;

import React from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";

function DataDisplay({ data, numCols = 4 }) {
  const options = {
    size: 180,
    // size: zoom,
    minSize: 30,
    gutter: -77,
    provideProps: true,
    numCols,
    fringeWidth: 500,
    yRadius: 50,
    xRadius: 50,
    cornerRadius: 0,
    showGuides: true,
    compact: true,
    gravitation: 1,
  };
  const children = data.map((item) => {
    return <Child className="child" key={item.id} params={item} />;
  });
  return (
    <>
      <div>
        <BubbleUI options={options} className="myBubbleUI">
          {children}
        </BubbleUI>
      </div>
    </>
  );
}

export default DataDisplay;

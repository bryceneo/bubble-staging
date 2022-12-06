import React from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";

function DataDisplay({
  data,
  bubbleOptions,
  height = "500px",
  selectedField,
  setMode,
  mode,
  setSelectedSubject,
  selectedSubject,
  color
}) {
  const options = {
    size: 180,
    // size: zoom,
    minSize: 30,
    gutter: -65,
    provideProps: true,
    numCols: 4,
    fringeWidth: 500,
    yRadius: 50,
    xRadius: 50,
    cornerRadius: 0,
    showGuides: false,
    compact: true,
    gravitation: 1,
    compact: true
  };
  const children = data.map((item, index) => {
    return (
      <Child
        className="child"
        key={item.id ? item.id : `e${index}`}
        params={item}
        selectedField={selectedField}
        setMode={setMode}
        setSelectedSubject={setSelectedSubject}
        mode={mode}
        selectedSubject={selectedSubject}
        color={color}
      />
    );
  });
  return (
    <>
      <div
        style={{
          height: `${height}`,
        }}
      >
        <div
          style={{
            height: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <BubbleUI
            options={{ ...options, ...bubbleOptions }}
            className="myBubbleUI mob-bubbleui"
          >
            {children}
          </BubbleUI>
        </div>
      </div>
    </>
  );
}

export default DataDisplay;

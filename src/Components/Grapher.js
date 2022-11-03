import React from "react";
import { Graph } from "react-d3-graph";
import data from "./Data/graphData";

function Grapher() {
  const nodeDiv = (node) => (
    <div
      style={{
        color: "white",
        backgroundColor: "#223247",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "15px",
        height: "100%",
        width: "100%",
        padding: "1em",
        // lineHeight: "10em",
      }}
    >
      {node.id}
    </div>
  );

  const [ref, setRef] = React.useState(null);
  const config = {
    directed: false,
    automaticRearrangeAfterDropNode: true,
    focusAnimationDuration: 0.75,
    focusZoom: 5,
    collapsible: true,
    height: 700,
    width: 700,
    highlightDegree: 2,
    highlightOpacity: 0.5,
    linkHighlightBehavior: false,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: false, // comment this to reset nodes positions to work
    panAndZoom: true,
    staticGraph: false,

    d3: {
      alphaTarget: 0.05,
      gravity: -500,
      linkLength: 1,
      linkStrength: 20,
    },
    node: {
      color: "#d3d3d3",
      fontColor: "black",
      fontSize: 20,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 14,
      highlightFontWeight: "bold",
      highlightStrokeColor: "red",
      highlightStrokeWidth: 1.5,
      // labelProperty: (n) => (n.name ? `${n.id} - ${n.name}` : n.id),
      mouseCursor: "pointer",
      opacity: 1,
      renderLabel: false,
      size: 900,
      strokeColor: "none",
      strokeWidth: 1.5,
      svg: "",
      symbolType: "circle",
      viewGenerator: nodeDiv,
    },
    link: {
      color: "black",
      highlightColor: "",
      mouseCursor: "",
      opacity: 1,
      semanticStrokeWidth: false,
      strokeWidth: 1,
      markerHeight: 5,
      markerWidth: 5,
      type: "STRAIGHT",
    },
  };

  const resetNodesPositions = React.useCallback(() => {
    if (ref) ref.resetNodesPositions();
  }, [ref]);

  const handleRefChange = React.useCallback((ref) => {
    setRef(ref);
  }, []);
  return (
    <>
      {/* <button onClick={resetNodesPositions}>Reset Nodes</button> */}
      <Graph id="test" data={data} config={config} ref={handleRefChange} />
    </>
  );
}

export default Grapher;

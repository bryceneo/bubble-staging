import React from "react";
import { Graph } from "react-d3-graph";

function Grapher() {
  const nodeDiv = (node) => (
    <div
      style={{
        color: "white",
        backgroundColor: "#223247",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        fontSize: "0.4em",
        height: "100%",
        width: "100%",
        padding: "1em",
        lineHeight: "3em",
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
    height: 600,
    width: 600,
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
      size: 3000,
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
  const data = {
    links: [
      {
        source: "Anthropology",
        target: "25",
      },
      {
        source: "Anthropology",
        target: "Sociology",
      },
      {
        source: "Anthropology",
        target: "Economics",
      },
      {
        source: "Anthropology",
        target: "27",
      },
      {
        source: "Anthropology",
        target: "Environmental Studies",
      },
      {
        source: "Anthropology",
        target: "32",
      },
      {
        source: "Anthropology",
        target: "35",
      },
      {
        source: "Anthropology",
        target: "44",
      },
      {
        source: "Anthropology",
        target: "Migration Studies",
      },
      {
        source: "Anthropology",
        target: "History",
      },
      {
        source: "History",
        target: "Behavioral Science",
      },
      {
        source: "Sociology",
        target: "25",
      },
      {
        source: "25",
        target: "Economics",
      },
      {
        source: "Economics",
        target: "27",
      },
    ],
    nodes: [
      {
        id: "Anthropology",
        symbolType: "circle",
        color: "red",
        size: 300,
        labelPosition: "center",
      },
      {
        id: "Sociology",
        symbolType: "circle",
        color: "red",
        size: 300,
        labelPosition: "center",
      },
      {
        id: "Economics",
        symbolType: "circle",
        color: "red",
        size: 300,
        labelPosition: "center",
      },
      {
        id: "Environmental Studies",
        symbolType: "circle",
        color: "red",
        size: 300,
        labelPosition: "center",
      },
      {
        id: "History",
        symbolType: "circle",
        color: "red",
        size: 300,
        labelPosition: "center",
      },
      {
        id: "Behavioral Science",
        symbolType: "circle",
        color: "red",
        size: 300,
        labelPosition: "center",
      },
      {
        id: "Migration Studies",
        symbolType: "circle",
        color: "red",
        size: 300,
        labelPosition: "center",
      },
      {
        id: "25",
        name: "Max Eisenhardt",
        svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUg_S8jc9xjw-UYRvEBtPdjO1Ytj75rcajbn-FY7z&s",
        size: 500,
      },
      {
        id: "27",
        name: "Jhon Dow",
        svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYInlcLz-tohmDcaurwEy29Bk94eg1075l0Q&usqp=CAU",
        size: 500,
      },
      {
        id: "32",
        name: "Max fiels",
        svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY46bDjH2LeAM-zTiyngADD2TmlqpwAlwDyA&usqp=CAU",
        size: 500,
      },
      {
        id: "35",
        name: "Hans Eisenhardt",
        svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEdOGWCl2XyCAxD_pzARX98Swdft2_XB2zT-dCU4V8ovseWC5d5EVEi1bW4LHonanbIU&usqp=CAU",
        size: 500,
      },
      {
        id: "44",
        name: "Boom Box",
        svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iTjtrYlOkCwewoOOodDd-UzfZI6t-w3Ayw&usqp=CAU",
        size: 500,
      },
    ],
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

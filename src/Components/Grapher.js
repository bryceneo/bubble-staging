import React from "react";
import { Graph } from "react-d3-graph";
import data from "./Data/graphData";
import allData from "../Components/Data/AllData.json";
import CategoriesData from "./Data/CategoriesData";
import Tooltip from "rc-tooltip";

const picGenerator = (node) => {
  return (
    <Tooltip
      placement="top"
      trigger={["hover"]}
      overlay={
        <div className="emp-popup">
          <div className="emp-pop-name">{node?.name}</div>
          <div className="emp-pop-des">{node?.designation?.split(",")[0]}</div>
          {/* <div className="emp-pop-info">{}</div> */}
          <div className="emp-pop-know-more">Know More</div>
        </div>
      }
    >
      <div
        style={{
          borderRadius: "100%",
          objectFit: "contain",
          overflow: "hidden",
          height: "80px",
          width: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#223247",
          border: node.border,
        }}
      >
        <img src={node.svg} height={"100%"} width={"100%"} alt={node.name} />
      </div>
    </Tooltip>
  );
};
function Grapher({ selectedItem, relatedSubjects, setDisplayGraph }) {
  // console.log(selectedItem, "selectedItem");
  const centralNode = {
    id: selectedItem,
    symbolType: "circle",
    labelPosition: "center",
    x: 150,
    y: 300,
  };
  let links = [];

  const winners = allData?.Database?.filter(
    (person) =>
      person["Field of study and training"]?.includes(selectedItem) ||
      person["Major body of work -time of prize"]?.includes(selectedItem) ||
      person["Influence/Impact"]?.includes(selectedItem)
  )?.map((winner) => {
    links.push({
      source: selectedItem,
      target: winner?.Name,
    });
    return {
      id: winner?.Name,
      name: winner?.Name,
      svg: winner?.img || "images/No.jpg",
      designation: winner["Designation at the time of winning the Prize"],
      subject:
        winner["Field of study and training"] +
        winner["Major body of work -time of prize"] +
        winner["Influence/Impact"],
      border:
        "5px solid " +
          CategoriesData?.find((item) =>
            winner["Prize Category"].includes(item?.name)
          ).colorCode || "",
      viewGenerator: picGenerator,
    };
  });

  const relatedSubjectsNode = relatedSubjects?.map((subject) => {
    links.push({
      source: subject,
      target: selectedItem,
    });
    links.push({
      source: subject,
      target: winners?.find((item) => item?.subject?.includes(subject))?.name,
    });
    return {
      id: subject,
      symbolType: "circle",
      labelPosition: "center",
    };
  });

  const nodeDiv = (node) => (
    <div
      style={{
        color: "white",
        backgroundColor: "#223247",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "11px",
        height: "100%",
        width: "100%",
        padding: "1em",
        alignItems: "center",
      }}
      className="graph"
    >
      {node.id}
    </div>
  );

  let data = {
    links: links,
    nodes: [centralNode, ...winners, ...relatedSubjectsNode],
  };

  const [ref, setRef] = React.useState(null);
  const config = {
    directed: false,
    // automaticRearrangeAfterDropNode: true,
    focusAnimationDuration: 0.75,
    focusZoom: 5,
    collapsible: false,
    height: 50 * data?.nodes?.length + 150,
    width:  50 * data?.nodes?.length + 200,
    highlightDegree: 100,
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
    <div className="graph-wrapper w-100 p-3">
      <button className="back-btn" onClick={() => setDisplayGraph(false)}>
        Back
      </button>
      <Graph id="test" data={data} config={config} ref={handleRefChange} />
    </div>
  );
}

export default Grapher;

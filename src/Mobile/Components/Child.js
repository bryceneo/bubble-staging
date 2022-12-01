import React from "react";
import testPerson from "../Data/Pics/2.jpeg";
import { useNavigate } from "react-router-dom";

function Child({ params }) {
  const navigate = useNavigate();
  const subjectClickHandler = (subID, isRouting) => {
    if (isRouting) {
      navigate(`${isRouting}`);
    }
  };
  const personClickHandler = (lauID, isRouting) => {
    if (isRouting) {
      navigate(`/prize-details/${lauID}/studies`);
    }
  };
  if (params.type === "subject" || params.type === "sub-subject") {
    return (
      <div
        style={{
          color: `${params.textColor}`,
          border: `${params.borderThickness} ${
            params.borderStyle ? params.borderStyle : "solid"
          } ${params.borderColor}`,
          borderRadius: 100,
          backgroundColor: `${params.backgroundColor}`,
          height: "90px",
          width: "90px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2px",
          overflow: "hidden",
          scale: `${params.scaleFactor}`,
          opacity: `${params.isActive ? "100%" : "50%"}`,
          cursor: `${params.isRouting ? "pointer" : null}`,
        }}
        onClick={() => subjectClickHandler(params.subjectId, params.isRouting)}
      >
        {params.text}
      </div>
    );
  }
  if (params.type === "person") {
    return (
      <div
        style={{
          borderRadius: 50,
          border: `${params.borderThickness} solid ${params.borderColor}`,
          height: "90px",
          width: "90px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2px",
          overflow: "hidden",
          scale: `${params.scaleFactor}`,
          opacity: `${params.isActive ? "100%" : "50%"}`,
          cursor: `${params.isRouting ? "pointer" : null}`,
        }}
        onClick={() => personClickHandler(params.laurateId, params.isRouting)}
      >
        <img src={params.image} width="120px" height="120px" alt="test" />
      </div>
    );
  }
  if (params.type === "empty") {
    return (
      <>
        <div
          style={{
            borderRadius: 100,
            backgroundColor: `${params.backgroundColor}`,
            height: "90px",
            width: "90px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "2px",
            overflow: "hidden",
            scale: `${params.scaleFactor}`,
            opacity: `${params.isActive ? "100%" : "50%"}`,
            cursor: `${params.isRouting ? "pointer" : null}`,
          }}
        ></div>
      </>
    );
  }
  return <div>Failed</div>;
}

export default Child;

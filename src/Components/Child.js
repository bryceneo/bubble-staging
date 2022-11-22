import React, { useState } from "react";
import testPerson from "./Data/Pics/2.jpeg";
import { useNavigate } from "react-router-dom";
import "./styles/Child.css";

function Child({ params }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const navigate = useNavigate();
  const subjectClickHandler = (subID, isRouting) => {
    if (isRouting) {
      navigate(`/subject-details/${subID}`, {
        state: { subId: params.subjectId, subText: params.text },
      });
    }
  };
  const personClickHandler = (lauID, isRouting) => {
    if (isRouting) {
      navigate(`/laurate-details/${lauID}`);
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
      <>
        {/* Hover panel */}
        {isHovering && (
          <>
            <div className="emp-popup">
              <div className="emp-pop-name">Ramesh Pradhan</div>
              <div className="emp-pop-des">Asst Prof.</div>
              <div className="emp-pop-info">Random Text</div>
              <div className="emp-pop-know-more">Know More</div>
            </div>
          </>
        )}
        {/* Person photo */}
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
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
      </>
    );
  }
  return <div>Failed</div>;
}

export default Child;

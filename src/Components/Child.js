import React, { useState } from "react";
import testPerson from "./Data/Pics/2.jpeg";
import { useNavigate } from "react-router-dom";
import DummyImage from "./Data/Pics/2.jpeg";
import CategoriesData from "./Data/CategoriesData";
import Avatar from "react-avatar";
function Child({ params, setSelectedItem, selectedItem, selectedYear }) {
  // console.log(params.id, params.backgroundColor);
  // console.log(params["Prize Category"], "asgbjhbas");
  const navigate = useNavigate();
  // const subjectClickHandler = (subID, isRouting) => {
  //   if (isRouting) {
  //     navigate(`/subject-details/${subID}`, {
  //       state: { subId: params.subjectId, subText: params.text },
  //     });
  //   }
  // };
  const personClickHandler = (lauID, isRouting) => {
    if (isRouting) {
      navigate(`/laurate-details/${lauID}`);
    }
  };

  const backgroundColor = () => {
    if (selectedItem?.Name) {
      if (selectedItem[" Field of study and training "].includes(params))
        return "#F1AC4D ";
      if (
        selectedItem["Major body of work -time of prize"].includes(params) ||
        selectedItem["Influence/Impact"].includes(params)
      )
        return "#ffff";
    }
    return "";
  };

  const getTextColor = () => {
    if (
      (selectedItem?.Name &&
        selectedItem[" Field of study and training "].includes(params)) ||
      params === selectedYear
    )
      return "#ffffff";
  };

  const getBorderStyle = () => {
    if (
      selectedItem?.Name &&
      selectedItem["Major body of work -time of prize"].includes(params)
    )
      return "2px solid #F1AC4D";
    if (
      selectedItem?.Name &&
      selectedItem[" Field of study and training "].includes(params)
    )
      return "";
    return "2px solid #D2D2D2";
  };

  if (params?.Name) {
    return (
      <div
        style={{
          color: `#223247`,
          border: `5px solid ${
            CategoriesData.find((item) =>
              params["Prize Category"]?.includes(item?.name)
            )?.colorCode ||
            CategoriesData.find((item) => item?.name === "Others")?.colorCode
          }`,
          borderRadius: 100,
          // backgroundColor: `${params.backgroundColor}`,
          height: "90px",
          width: "90px",
          overflow: "hidden",
          // scale: 2,
          opacity: selectedItem?.Name
            ? selectedItem?.Name === params.Name
              ? "100%"
              : "50%"
            : "100%",
          // cursor: `${params.isRouting ? "pointer" : null}`,
          cursor: "pointer",
        }}
        onClick={() => setSelectedItem(params)}
      >
        {/* {params} */}
        <img
          src={`images/${params?.Name}.jpg`}
          // srcset={`images/${params?.Name}.png,images/${params?.Name}.jpeg`}
          srcSet={`images/${params?.Name}.png 1280w,images/${params?.Name}.jpeg 1280w`}
          width="100%"
          height="100%"
          alt={params.Name}
          style={{
            cursor: "pointer",
          }}
        />
        {/* <p>{params.Name}</p> */}
      </div>
    );
  } else {
    return (
      <div
        style={{
          borderRadius: 100,
          border: getBorderStyle(),
          height: "90px",
          width: "90px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2px",
          overflow: "hidden",
          scale: 1,
          opacity: "100%",
          cursor: `pointer`,
          backgroundColor:
            params === selectedYear ? "#14202E" : backgroundColor(),
          color: getTextColor(),
        }}
        // onClick={() => personClickHandler(params.laurateId, params.isRouting)}
      >
        {params === selectedYear ? `${selectedYear} Prize Winners` : params}
      </div>
    );
  }
  return <div>Failed</div>;
}

export default Child;

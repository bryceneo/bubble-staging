import React, { useEffect, useState } from "react";
import testPerson from "./Data/Pics/2.jpeg";
import { useNavigate } from "react-router-dom";
import DummyImage from "./Data/Pics/2.jpeg";
import CategoriesData from "./Data/CategoriesData";
import Avatar from "react-avatar";
function Child({
  params,
  setSelectedItem,
  selectedItem,
  selectedYear,
  relatedSubjects,
}) {
  const navigate = useNavigate();

  const CategoryColor = selectedItem
    ? CategoriesData?.find((item) =>
        selectedItem["Prize Category"]?.includes(item?.name)
      )?.colorCode
    : "";

  // console.log(params, "params");
  // console.log(relatedSubjects, "relatedSubjects");

  const backgroundColor = () => {
    if (selectedItem?.Name) {
      if (selectedItem["Field of study and training"].includes(params))
        return CategoryColor;
      if (
        selectedItem["Major body of work -time of prize"]?.includes(params) ||
        selectedItem["Influence/Impact"]?.includes(params)
      )
        return "#ffff";
    }
    return "";
  };

  const getTextColor = () => {
    if (
      (selectedItem?.Name &&
        selectedItem["Field of study and training"]?.includes(params)) ||
      params === selectedYear ||
      selectedItem === params ||
      relatedSubjects?.includes(params)
    )
      return "#ffffff";
  };

  const getBorderStyle = () => {
    if (
      selectedItem?.Name &&
      selectedItem["Major body of work -time of prize"]?.includes(params)
    )
      return "2px solid" + CategoryColor;
    if (
      selectedItem?.Name &&
      selectedItem["Influence/Impact"]?.includes(params)
    )
      return "2px dashed" + CategoryColor;
    if (
      selectedItem?.Name &&
      selectedItem["Field of study and training"]?.includes(params)
    )
      return "";
    return "2px solid #D2D2D2";
  };

  const isIteminSubjects = () => {
    return (
      selectedItem &&
      (params["Prize Category"]?.includes(selectedItem) ||
        params["Field of study and training"]?.includes(selectedItem) ||
        params["Major body of work -time of prize"]?.includes(selectedItem) ||
        params["Influence/Impact"]?.includes(selectedItem))
    );
  };

  const isSubjectInItem = () => {
    return (
      selectedItem?.Name &&
      (selectedItem?.Name === params?.Name ||
        selectedItem["Prize Category"]?.includes(params) ||
        selectedItem["Field of study and training"]?.includes(params) ||
        selectedItem["Major body of work -time of prize"]?.includes(params) ||
        selectedItem["Influence/Impact"]?.includes(params))
    );
  };

  const getOpacity = () => {
    // console.log(params);
    if (
      !selectedItem ||
      isIteminSubjects(selectedItem) ||
      isSubjectInItem(selectedItem) ||
      params === selectedItem ||
      params === selectedYear ||
      (selectedItem && !selectedItem?.Name && relatedSubjects?.includes(params))
    )
      return "100%";
    return "50%";
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
          height: "100px",
          width: "100px",
          overflow: "hidden",
          // scale: 2,
          opacity: getOpacity(),

          // cursor: `${params.isRouting ? "pointer" : null}`,
          cursor: "pointer",
        }}
        onClick={() => setSelectedItem(params)}
      >
        <img
          src={`images/${params?.Name}.jpg`}
          // srcset={`images/${params?.Name}.png,images/${params?.Name}.jpeg`}
          // srcSet={`images/${params?.Name}.png 1280w,images/${params?.Name}.jpeg 1280w`}
          width="100%"
          height="100%"
          alt={params.Name}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          borderRadius: "100%",
          border: getBorderStyle(),
          minHeight: "100px",
          width: "100px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          overflow: "hidden",
          scale: 1,
          opacity: getOpacity(),
          cursor: `pointer`,
          backgroundColor:
            params === selectedYear ||
            selectedItem === params ||
            (selectedItem &&
              !selectedItem?.Name &&
              relatedSubjects?.includes(params))
              ? "#14202E"
              : backgroundColor(),
          color: getTextColor(),
        }}
        // onClick={() => personClickHandler(params.laurateId, params.isRouting)}
        onClick={() => setSelectedItem(params)}
      >
        {params === selectedYear ? `${selectedYear} Prize Winners` : params}
      </div>
    );
  }
  return <div>Failed</div>;
}

export default Child;

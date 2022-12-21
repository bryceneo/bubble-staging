import React, { useEffect, useState, useContext } from "react";
import testPerson from "./Data/Pics/2.jpeg";
import { useNavigate } from "react-router-dom";
import DummyImage from "./Data/Pics/2.jpeg";
import CategoriesData from "./Data/CategoriesData";
import Avatar from "react-avatar";
import "./styles/Child.css";
import Tooltip from "rc-tooltip";
import { findColorOfSubject } from "./utilities";
import { AppContext } from "../Context/AppContext";
function Child({
  params,
  setSelectedItem,
  selectedItem,
  // selectedYear,
  // selectedYearRange,
  relatedSubjects,
  mobileView,
  selectedField,
  setSelectedField,
  // setDisplayGraph,
  // setSubjectForTimeLine,
}) {
  const {
    selectedYear,
    displayGraph,
    setDisplayGraph,
    selectedYearRange,
    setSelectedYearRange,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const CategoryColor = selectedItem
    ? CategoriesData?.find((item) =>
        selectedItem["Prize Category"]?.includes(item?.name)
      )?.colorCode
    : "";

  // console.log(params, "params");
  // console.log(selectedField, "selectedField");

  const backgroundColor = () => {
    if (selectedItem?.Name) {
      if (
        selectedItem["Field of study and training"].includes(params) &&
        (!selectedField || selectedField === "Field of study and training")
      )
        return findColorOfSubject(CategoriesData, params) || CategoryColor;
      if (
        (!selectedField &&
          selectedItem["Major body of work -time of prize"]?.includes(
            params
          )) ||
        (!selectedField &&
          selectedItem["Influence/Impact"]?.includes(params)) ||
        selectedField === "Major body of work -time of prize" ||
        selectedField === "Influence/Impact"
      )
        return "#ffff";
    }
    return "";
  };

  const getTextColor = () => {
    if (
      (selectedItem?.Name &&
        selectedItem["Field of study and training"]?.includes(params) &&
        (!selectedField || selectedField === "Field of study and training")) ||
      typeof params === "number" ||
      selectedItem === params ||
      (!selectedItem?.Name && relatedSubjects?.includes(params))
    )
      return "#ffffff";
    else return "";
  };
  const getBorderStyle = () => {
    if (
      selectedItem?.Name &&
      selectedItem["Major body of work -time of prize"]?.includes(params) &&
      (!selectedField || selectedField === "Major body of work -time of prize")
    )
      return (
        "2px solid" + findColorOfSubject(CategoriesData, params) ||
        CategoryColor
      );
    if (
      selectedItem?.Name &&
      selectedItem["Influence/Impact"]?.includes(params) &&
      (!selectedField || selectedField === "Influence/Impact")
    )
      return (
        "2px dashed" + findColorOfSubject(CategoriesData, params) ||
        CategoryColor
      );
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
      typeof params === "number" ||
      params === selectedYear ||
      (selectedItem && !selectedItem?.Name && relatedSubjects?.includes(params))
    )
      return "100%";
    return "50%";
  };

  if (params?.Name) {
    return (
      <div>
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay={
            <div
              className="emp-popup"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="emp-pop-name">{params?.Name}</div>
              <div className="emp-pop-des">
                {
                  params["Designation at the time of winning the Prize"]?.split(
                    ","
                  )[0]
                }
              </div>
              {/* <div className="emp-pop-info">{}</div> */}
              <div className="emp-pop-know-more">Know More</div>
            </div>
          }
        >
          <div
            // onMouseEnter={handleMouseOver}
            // onMouseLeave={handleMouseOut}
            style={{
              color: `#223247`,
              border: `5px solid ${
                CategoriesData.find((item) =>
                  params["Prize Category"]?.includes(item?.name)
                )?.colorCode ||
                CategoriesData.find((item) => item?.name === "Others")
                  ?.colorCode
              }`,
              minWidth: "98px",
              minHeight: "98px",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              // scale: 2,
              opacity: getOpacity(),

              // cursor: `${params.isRouting ? "pointer" : null}`,
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedField("");
              setSelectedItem(params);
              // setSubjectForTimeLine("");
            }}
          >
            <img
              src={params?.img || `images/No.jpg`}
              className="asdasasads"
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
        </Tooltip>
      </div>
    );
  } else {
    return (
      <div
        style={{
          // borderRadius: "100%",
          border: getBorderStyle(),
          // height: "85px",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          padding: "5px",
          // padding: "34px 5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // overflow: "hidden",
          // scale: 1,
          // textAlign: "center",

          opacity: getOpacity(),
          cursor:
            typeof params === "number" || params === "No Data Found"
              ? ""
              : `pointer`,
          backgroundColor:
            typeof params === "number" ||
            selectedItem === params ||
            (selectedItem &&
              !selectedItem?.Name &&
              relatedSubjects?.includes(params))
              ? "#14202E"
              : backgroundColor(),
          color: getTextColor(),
        }}
        // onClick={toggleGraph}
        // onClick={() => personClickHandler(params.laurateId, params.isRouting)}
        onClick={() => {
          if (
            params !== selectedYear &&
            params !== "No Data Found" &&
            typeof params !== "number"
          ) {
            setSelectedField("");
            setSelectedItem(params);
            // setSubjectForTimeLine(params)
            setTimeout(() => {
              setDisplayGraph(true);
            }, 100);
          }
        }}
      >
        {typeof params === "number" ? `${params} Prize Winners` : params}
      </div>
    );
  }
}

export default Child;

import React from "react";
import { Link, Navigate } from "react-router-dom";
// import yearLine from "../Data/yearLine";
import Data from "../../Components/Data/AllData.json";
import "./Styles/YearLine.css";
const yearLine = [
  ...Array.from(
    new Set(Data?.Database?.map((item) => item?.["Infosys Prize"]))
  ),
].reverse();
function YearLine({ selectedYear, setSelectedYear }) {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          background: "#f6f6f6",
        }}
      >
        <div
          className="yearline-mob"
          style={{
            display: "flex",
            paddingRight: "50px",
            direction: "rtl",
            overflow: "auto",
            padding: "15px 0",
            background: "#f6f6f6",
            // height:"64px",
            // width:"64px"
          }}
        >
          {yearLine.map((year) => {
            if (selectedYear === year)
              return (
                <div
                  style={{
                    background: "#223247",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "0px",
                    fontSize: "12px",
                    padding: "11px 7px",
                    color: "#fff",
                    // height:"40px",
                    // width:"50px"
                  }}
                  key={year}
                  onClick={() => setSelectedYear(year)}
                >
                  <span className="year-line-yr">
                  {year}
                  </span>
                 
                </div>
              );
            return (
              <div
                style={{
                  margin: "0px",
                  cursor: "pointer",
                  fontSize: "12px",
                  padding: "11px 7px",
                  // height:"40px",
                  //   width:"50px"
                }}
                key={year}
                onClick={() => setSelectedYear(year)}
              ><span className="year-line-yr">
                 {year}
              </span>
               
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default YearLine;

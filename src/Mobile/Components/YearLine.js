import React from "react";
import { Link, Navigate } from "react-router-dom";
import yearLine from "../Data/yearLine";

function YearLine({ selectedYear }) {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingRight: "50px",
            direction: "rtl",
            overflow: "auto",
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
                  }}
                  key={year}
                >
                  {year}
                </div>
              );
            return (
              <Link to={`/prize-winners/${year}`}>
                <div
                  style={{
                    margin: "0px",
                    cursor: "pointer",
                    fontSize: "12px",
                    padding: "11px 7px",
                  }}
                  key={year}
                >
                  {year}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default YearLine;

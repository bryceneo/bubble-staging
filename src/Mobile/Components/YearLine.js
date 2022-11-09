import React from "react";
import yearLine from "../Data/yearLine";

function YearLine({ selectedYear = 2020 }) {
  const handleYearClick = (year) => {
    //
  };
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
                    border: "1px solid black",
                    borderRadius: "100%",
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "20px",
                  }}
                >
                  {year}
                </div>
              );
            return (
              <div
                style={{
                  margin: "20px",
                  cursor: "pointer",
                }}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default YearLine;

import React from "react";
import rangeLine from "../Data/rangeLine";

function RangeLine({
  selectedRange = 2,
  selectedColors,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  // console.log(selectedColors);
  const { color, bgColor } = selectedColors;
  return (
    <>
      <div
        className="range"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        {rangeLine.map((range) => {
          if (startDate === range?.startDate) {
            return (
              <div
                className="selected-range"
                style={{
                  background: `${bgColor}`,
                  padding: "10px",
                  color: `${color}`,
                  borderRadius: "8px"
                }}
                key={range.id}
                onClick={() => {
                  setStartDate(range.startDate);
                  setEndDate(range.endDate);
                }}
              >
                {range.range}
              </div>
            );
          }
          return (
            <div
              className="range-year"
              style={{ padding: "10px" }}
              key={range.id}
              onClick={() => {
                setStartDate(range.startDate);
                setEndDate(range.endDate);
              }}
            >
              {range.range}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RangeLine;

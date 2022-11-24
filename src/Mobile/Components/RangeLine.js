import React from "react";
import rangeLine from "../Data/rangeLine";

function RangeLine({ selectedRange = 2, selectedColors }) {
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
          margin:"20px 0",
        }}
      >
        {rangeLine.map((range) => {
          if (selectedRange === range.id) {
            return (
              <div
                className="selected-range"
                style={{
                  background: `${bgColor}`,
                  padding: "12px",
                  color: `${color}`,
                  borderRadius: "8px",
                }}
                key={range.id}
              >
                {range.range}
              </div>
            );
          }
          return (
            <div
              className="range-year"
              style={{ padding: "12px" }}
              key={range.id}
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

import React from "react";
import rangeLine from "../Data/rangeLine";

function RangeLine({ selectedRange = 2, selectedColors }) {
  return (
    <>
      <div className="range"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {rangeLine.map((range) => {
          if (selectedRange === range.id) {
            return (
              <div className="selected-range"
                style={{
                  background: "rgb(20, 32, 46)",
                  padding: "12px",
                  color:"#fff",
                  borderRadius:'8px',
                }}
                key={range.id}
              >
                {range.range}
              </div>
            );
          }
          return (
            <div className="range-year" style={{ padding: "12px" }} key={range.id}>
              {range.range}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RangeLine;

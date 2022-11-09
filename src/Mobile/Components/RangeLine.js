import React from "react";
import rangeLine from "../Data/rangeLine";

function RangeLine({ selectedRange = 2, selectedColors }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {rangeLine.map((range) => {
          if (selectedRange === range.id) {
            return (
              <div
                style={{
                  border: "1px solid black",
                  padding: "2px",
                }}
                key={range.id}
              >
                {range.range}
              </div>
            );
          }
          return (
            <div style={{ padding: "2px" }} key={range.id}>
              {range.range}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RangeLine;

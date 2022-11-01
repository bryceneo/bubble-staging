import React from "react";
import "./styles/ZoomBox.css";

function ZoomBox() {
  return (
    <>
      <div>
        <h5>
          Zoom <span style={{ color: "red" }}>100%</span>
        </h5>
        <hr />
        <button>+</button>

        <button>-</button>
      </div>
    </>
  );
}

export default ZoomBox;

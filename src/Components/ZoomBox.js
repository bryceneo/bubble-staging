import React, { useState } from "react";
import "./styles/ZoomBox.css";

function ZoomBox() {
  const [count, setCount] = useState(0);
  const increment = () => {
    let max = 200;
    if (count < max) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    let min = 0;
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="zoom-box">
        <div className="zm-title mb-3">
          <span className="text-b">Zoom</span>
          <span className="text-r">100%</span>
        </div>

        {/* <div className="zoom-cnrtls">
          <span className="zoom-in">+</span>

          <input type="range" />
          <span className="zoom-out">-</span>
        </div> */}
        <div className="zoom-cnrtls">
          <button className="zoom-in" onClick={increment}>
            +
          </button>
          <input type="range" max={200} min={0} value={count} />
          {count}
          <button className="zoom-out" onClick={decrement}>
            -
          </button>
        </div>
      </div>

      {/* <div class="zoom-cnrtls">
        <span class="zoom-in">+</span>
        <input type="range" min="100" max="250" value="180" id="height" />
        <span class="zoom-out">-</span>
      </div> */}
    </>
  );
}

export default ZoomBox;

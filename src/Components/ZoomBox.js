import React, { useState, useEffect } from "react";
import "./styles/ZoomBox.css";

function ZoomBox({ SetZoom }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    SetZoom(count);
  }, [count]);

  const increment = () => {
    let max = 2;
    if (count <= max) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    let min = -2;
    if (count >= min) {
      setCount(count - 1);
    }
  };
  // const handleChange = (value, name) => {
  //   console.log(value);
  //   console.log({ [name]: value });
  // };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const percenTage = () => {
    return (count / 3) * 100;
  };

  return (
    <>
      <div className="zoom-box">
        <div className="zm-title mb-3">
          <span className="text-b">Zoom</span>
          <span className="text-r">{percenTage().toFixed(2)}%</span>
        </div>

        <div className="zoom-cnrtls">
          <button className="zoom-out" onClick={decrement}>
            -
          </button>
          <input
            type="range"
            max={3}
            min={-3}
            name="range"
            value={count}
            // onChange={(event) =>
            //   handleChange(event.target.value, event.target.name)
            // }
            onChange={handleChange}
          />
          {count}
          <button className="zoom-in" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default ZoomBox;

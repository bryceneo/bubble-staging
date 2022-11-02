import React, { useState } from "react";
import "./styles/Timeline.css";
import TimeLineYearData from "./Data/TimeLineYearData";

function Timeline() {
  const [timelines, setTimeLinedata] = useState(TimeLineYearData);
  return (
    <>
      <h4>Laureate Ramesh Pradhan</h4>
      <div className=" mb-3">
        <ul class="years-scroll p-0">
          {timelines.map((timeline) => {
            return (
              <li class="years-scroll-item">
                <div class="cm">
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                  <div class="mm"></div>
                </div>
                <span class="year-txt">{timeline.year}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Timeline;

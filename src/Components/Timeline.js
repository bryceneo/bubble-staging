import React, { useState } from "react";
import "./styles/Timeline.css";
import TimeLineYearData from "./Data/TimeLineYearData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import RangeSelector, { Scale } from "devextreme-react/range-selector";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useNavigate } from "react-router-dom";

function Timeline({
  selectedYear,
  setSelectedYear,
  subjectForTimeline,
  chooseYearRange,
  selectedYearRange,
  ref,
  setSelectedYearRange,
}) {
  const [timelines, setTimeLinedata] = useState(TimeLineYearData);

  // const [selectedYearRange, setSelectedYearRange] = useState([]);

  let start = TimeLineYearData?.[0].year;
  let end = TimeLineYearData?.[TimeLineYearData.length - 1].year;

  let selectedStart = selectedYearRange?.[0];
  let selectedEnd = selectedYearRange?.[1];

  const defaultValue = [
    selectedStart ? selectedStart : start,
    selectedEnd ? selectedEnd : end,
  ];

  // console.log("val of start end ", ref);
  // console.log("val of start end ", selectedStart, selectedEnd);
  // console.log(" selectedYearRange in child", selectedYearRange);

  return (
    <>
      <div className="">
        <h4 className="mt-4 emp-name">
          {typeof selectedYear === "number"
            ? `Laureates in ${selectedYear}`
            : `${
                selectedYearRange?.[0] == selectedYearRange?.[1]
                  ? `Laureates in ${selectedYearRange?.[0]}`
                  : `Laureates from ${selectedYearRange?.[0]} to ${selectedYearRange?.[1]}`
              }`}
        </h4>

        <RangeSelector
          // title="Select House Price Range"
          defaultValue={defaultValue}
          onValueChange={async (e) => {
            // console.log(e);
            await setSelectedYearRange(e);
            // chooseYearRange(e);
            // setSelectedYear(0);
            // localStorage.setItem("selection", "slider");
          }}
        >
          <Scale
            startValue={start}
            endValue={end}
            minorTickInterval={1}
            tickInterval={1}
          ></Scale>
        </RangeSelector>

        {/* <Swiper
          // className="mySwiper"
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          spaceBetween={10}
          slidesPerView={timelines?.length / 5}
          // mousewheel={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSlideChange={(e) => console.log("slide change", e)}
          // onSwiper={(swiper) => console.log(swiper)}

          // }}
        >
          <ul class="years-scroll p-0">
            {timelines.map((timeline, index) => {
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <li>
                      <div className={"cm"}>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                        <div className="mm"></div>
                      </div>
                      <span
                        onClick={() => yearClickHandler(timeline.year)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {timeline.year}{" "}
                      </span>
                    </li>
                  )}
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper> */}
      </div>
    </>
  );
}

export default React.memo(Timeline);

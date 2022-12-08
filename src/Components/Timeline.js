import React, { useState } from "react";
import "./styles/Timeline.css";
import TimeLineYearData from "./Data/TimeLineYearData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

function Timeline({ selectedYear, setSelectedYear, subjectForTimeline }) {
  const navigate = useNavigate();
  const [timelines, setTimeLinedata] = useState(TimeLineYearData);
  const yearClickHandler = (year) => {
    setSelectedYear(year);
  };
  return (
    <>
      <h4 className="mt-4 mb-4 emp-name">
        Laureates in {selectedYear}{" "}
        {`${subjectForTimeline ? " - " + subjectForTimeline : ""}`}
      </h4>
      <div className=" mb-3">
        <Swiper
          // className="mySwiper"
          spaceBetween={0}
          slidesPerView={timelines?.length}
          mousewheel={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // breakpoints={{
          //   1920: {
          //     width: 1920,
          //     slidesPerView: 24,
          //     mousewheel: true,
          //   },
          //   1200: {
          //     width: 1200,
          //     slidesPerView: 22,
          //     // mousewheel:true,
          //   },
          //   768: {
          //     width: 768,
          //     slidesPerView: 18,
          //     mousewheel: true,
          //   },
          // }}
        >
          <ul class="years-scroll p-0">
            {timelines.map((timeline, index) => {
              return (
                <SwiperSlide key={index} >
                  <li className="years-scroll-item">
                    <div className="cm">
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
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </div>
    </>
  );
}

export default Timeline;

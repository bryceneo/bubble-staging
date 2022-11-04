import React, { useState } from "react";
import "./styles/Timeline.css";
import TimeLineYearData from "./Data/TimeLineYearData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Timeline() {
  const [timelines, setTimeLinedata] = useState(TimeLineYearData);
  return (
    <>
      <h4 className="mt-4 mb-4 emp-name">Laureate Ramesh Pradhan</h4>
      <div className=" mb-3">
        <Swiper
          className="mySwiper"
          spaceBetween={0}
          slidesPerView={20}
          mousewheel={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <ul class="years-scroll p-0">
            {timelines.map((timeline, index) => {
              return (
                // <Swiper
                //   className="mySwiper"
                //   spaceBetween={50}
                //   slidesPerView={3}
                //   onSlideChange={() => console.log("slide change")}
                //   onSwiper={(swiper) => console.log(swiper)}
                // >
                <SwiperSlide key={index} className={timeline.isactive}>
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
                    </div>
                    <span className="year-txt">{timeline.year}</span>
                  </li>
                </SwiperSlide>
                // </Swiper>
              );
            })}
          </ul>
        </Swiper>
      </div>
    </>
  );
}

export default Timeline;

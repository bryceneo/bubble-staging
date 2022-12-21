import React, { useContext } from "react";
import "./styles/Timeline.css";
import RangeSelector, {
  Format,
  Label,
  Scale,
  SliderMarker,
} from "devextreme-react/range-selector";
import data from "./Data/AllData.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { AppContext } from "../Context/AppContext";

function Timeline() {
  const { selectedYear, selectedYearRange, setSelectedYearRange } =
    useContext(AppContext);

  let YearList = [
    ...new Set(data.Database.map((item) => item["Infosys Prize"])),
  ];

  // YearList = [200, 300, 400, 500, 600];

  console.log("A::", YearList);
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
          height={80}
          defaultValue={selectedYearRange}
          onValueChange={async (e) => {
            // setYearRange(e);
            setSelectedYearRange(e);
          }}
        >
          <Scale
            categories={""}
            startValue={YearList[0]}
            endValue={YearList[YearList.length - 1]}
            minorTickInterval={1}
            tickInterval={1}
          >
            <Label>
              <Format type="decimal" />
            </Label>
          </Scale>
        </RangeSelector>
      </div>
    </>
  );
}

export default React.memo(Timeline);

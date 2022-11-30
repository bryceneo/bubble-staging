import React from "react";
import CategoriesData from "../Data/CategoriesData";
import "./Styles/Winnercard.css";

function WinnerCard({ selectedItem, selectedYear, setSelectedItem }) {
  return (
    <>
      <div className="winner-card">
        <button className="" onClick={() => setSelectedItem(null)}>
          Back
        </button>
        <img
          src={"images/" + selectedItem?.Name + ".jpg"}
          height={"100px"}
          width={"100px"}
          style={{
            borderRadius: "100%",
            border: "5px solid #F1AC4D",
          }}
          alt={selectedItem?.Name}
        ></img>

        <div className="winner-empname">{selectedItem?.Name}</div>
        <div className="winner-sub">
          {selectedYear} laurate in{" "}
          <span
            className="sub-active"
            style={{
              backgroundColor: CategoriesData?.find((item) =>
                selectedItem["Prize Category"]?.includes(item.name)
              )?.colorCode,
            }}
          >
            {selectedItem["Prize Category"]}
          </span>
        </div>
        <div className="view-profile">View Aneesh profile </div>
      </div>
    </>
  );
}

export default WinnerCard;

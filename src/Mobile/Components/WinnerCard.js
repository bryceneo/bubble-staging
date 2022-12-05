import React from "react";
import CategoriesData from "../Data/CategoriesData";
import "./Styles/Winnercard.css";

function WinnerCard({ selectedItem, selectedYear, setSelectedItem, color }) {
  return (
    <>
      <div className="winner-card">
        <img
          src={"images/" + selectedItem?.Name + ".jpg"}
          height="100px"
          width="100px"
          style={{
            borderRadius: "100%",
            border: "5px solid " + color,
            overflow: "hidden",
            maxHeight: "100px",
            maxWidth: "100px"
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
            {selectedItem["Prize Category"]?.split("-")[0]}
          </span>
        </div>
        <div className="view-profile pt-4">View {selectedItem?.Name} profile </div>
      </div>
    </>
  );
}

export default WinnerCard;

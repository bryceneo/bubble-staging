import React from "react";
import "./Styles/Winnercard.css";

function WinnerCard({ selectedItem, selectedYear }) {
  return (
    <>
      <div className="winner-card">
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
          <span className="sub-active">{selectedItem["Prize Category"]}</span>
        </div>
        <div className="view-profile">View Aneesh profile </div>
      </div>
    </>
  );
}

export default WinnerCard;

import React from "react";
import "./Styles/Winnercard.css";

function WinnerCard() {
  return (
    <>
      <div className="winner-card">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUg_S8jc9xjw-UYRvEBtPdjO1Ytj75rcajbn-FY7z&s"
            height={"100px"}
            width={"100px"}
            style={{
              borderRadius: "100%",
              border: "5px solid #F1AC4D",
            }}
          ></img>
        </div>
        <div className="winner-empname">Aneesh Pradhan</div>
        <div className="winner-sub">
          2020 laurate in <span className="sub-active">Social Science</span>
        </div>
        <div className="view-profile">View Aneesh profile </div>
      </div>
    </>
  );
}

export default WinnerCard;

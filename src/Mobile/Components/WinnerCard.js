import React from "react";
import "./Styles/Winnercard.css";
function WinnerCard() {
  return (
    <>
    <div className="winner-card">
    <div>profile pic</div>
      <div className="winner-empname">Aneesh Pradhan</div>
      <div className="winner-sub">2020 laurate in <span className="sub-active">Social Science</span></div>
      <div className="view-profile">View Aneesh profile </div>
    </div>
    </>
  );
}

export default WinnerCard;

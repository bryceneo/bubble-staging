import React from "react";

function Mobile_Header({ isMenu }) {
  return (
    <>{isMenu ? <>Mobile Header with menu</> : <>Mobile Header with back</>}</>
  );
}

export default Mobile_Header;

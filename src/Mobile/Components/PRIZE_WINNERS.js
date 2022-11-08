import React from "react";
import { useParams } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import YearLine from "./YearLine";

function Prize_Winners() {
  const { year } = useParams();
  return (
    <>
      <MobileHeader isMenu={true} />
      <div>Prize winners {year}</div>
      <YearLine />
    </>
  );
}

export default Prize_Winners;

import React from "react";
import fieldRelations from "../Data/fieldRelations";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";
import "./Styles/Fieldrelation.css";

function Field_Relations() {
  return (
    <>
      <div>Showing fields related to Anthropology</div>
      <DataDisplay
        data={fieldRelations}
        bubbleOptions={{ numCols: 5 }}
        height={"600px"}
      />
      <Categories />
      <button className="view-btn">View all laureates in Anthropology</button>
    </>
  );
}

export default Field_Relations;

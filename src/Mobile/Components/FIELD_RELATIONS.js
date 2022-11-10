import React from "react";
import fieldRelations from "../Data/fieldRelations";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";
import "./Styles/Fieldrelation.css";

function Field_Relations() {
  return (
    <>
      <div className="subject-areas-title text-center grey-text p-3">Showing fields related to Anthropology</div>
      <DataDisplay
        data={fieldRelations}
        bubbleOptions={{ numCols: 5 }}
        height={"600px"}
      />
      <Categories />
     <div className="text-center"><button className="view-btn">View all laureates in Anthropology</button></div> 
    </>
  );
}

export default Field_Relations;

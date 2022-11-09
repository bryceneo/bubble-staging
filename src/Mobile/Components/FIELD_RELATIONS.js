import React from "react";
import fieldRelations from "../Data/fieldRelations";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";

function Field_Relations() {
  return (
    <>
      <div>Showing fields related to Anthropology</div>
      <DataDisplay data={fieldRelations} numCols={5} />
      <Categories />
      <button>View all laureates in Anthropology</button>
    </>
  );
}

export default Field_Relations;

import React from "react";
import { Link } from "react-router-dom";
import fieldRelations from "../Data/fieldRelations";
import Categories from "./Categories";
import DataDisplay from "./DataDisplay";
import "./Styles/Fieldrelation.css";

function Field_Relations() {
  return (
    <>
      <div className="subject-areas-title text-center grey-text p-3">
        Showing fields related to Anthropology
      </div>
      <DataDisplay
        data={fieldRelations}
        bubbleOptions={{ numCols: 5 }}
        height={"500px"}
      />
      <Categories />
      <Link to={"/year-ranges/2016-2020"}>
        <div className="text-center">
          <button className="view-btn">
            View all laureates in Anthropology
          </button>
        </div>
      </Link>
    </>
  );
}

export default Field_Relations;

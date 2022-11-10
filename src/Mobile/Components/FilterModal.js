import React, { useState } from "react";

function FilterModal() {
  const [modalPage, setModalPage] = useState("filter");
  if (modalPage === "filter") {
    return (
      <>
        <div className="modal-title">
          <span className="modal-heading">Filter By</span>
          <span className="results">5 Results available</span>
        </div>
        <div
          onClick={() => setModalPage("category")}
          className="category pt-4 pb-4"
        >
          <p className="m-0">Category</p>
          <span className="category-span d-block">
            {" "}
            Engineering and Computer Science
          </span>
        </div>
        <div className="category pt-4 pb-4">
          <p className="m-0">Field of Study</p>
          <span className="category-span d-block">Anthropology</span>
        </div>
        <div className="category pt-4 pb-4">
          <p className="m-0">Major Body of Work</p>
          <span className="category-span d-block"></span>
        </div>
        <div className="category pt-4 pb-4">
          <p className="m-0">Influence/Impact Area</p>
          <span className="category-span d-block"></span>
        </div>
        <div className="category pt-4 pb-4">
          <p className="m-0">Year</p>
          <span className="category-span d-block">2019,2020,2021</span>
        </div>

        <button className="view-btn d-block w-100 mt-4 ">Apply Filter</button>
        <button className="reset-filter d-block">Reset Filter</button>
      </>
    );
  }
  if (modalPage === "category") {
    return (
      <>
        <div>
          <div onClick={() => setModalPage("filter")}>back</div>
          <div>
            <span>Category</span>
            <span>12 results available</span>
          </div>
          <div>searchbox</div>
          <div>Engineering</div>
          <button>Choose</button>
          <button>Cancel</button>
        </div>
      </>
    );
  }
}

export default FilterModal;

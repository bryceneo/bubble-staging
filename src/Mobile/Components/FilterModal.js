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
          <div onClick={() => setModalPage("filter")}> <i class="fas fa-arrow-left"></i></div>
         
          <div class="modal-title">
            <span class="modal-heading">Category</span>
            <span class="results">12 Results available</span>
            </div>
            <input class="form-control me-2" type="search" placeholder="Enter Keywords to Search" aria-label="Search"/>
         
          <ul className="child-categories pt-3">
           <li>Engineering</li> 
           <li>Humanities</li>
           <li>Life Sciences</li>
           <li>Mathematical Sciences</li>
           <li>Physical Sciences</li>
           <li>Social Sciences</li>
          </ul>
          <button className="view-btn d-block w-100 mt-4 "> Choose</button>
        <button className="reset-filter d-block"> Cancel</button>
        </div>
      </>
    );
  }
}

export default FilterModal;
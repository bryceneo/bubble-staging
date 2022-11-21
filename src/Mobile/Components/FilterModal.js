import React, { useEffect, useState } from "react";

function FilterModal() {
  const [modalPage, setModalPage] = useState("filter");
  const categoryObj = [
    { id: 1, name: "Social Sciences" },
    { id: 2, name: "Humanities" },
    { id: 3, name: "Life Sciences" },
    { id: 4, name: "Mathematical Sciences" },
    { id: 5, name: "Physical Sciences" },
    { id: 6, name: "Social Sciences" },
  ];

  const [categorySelection, setCategorySelection] = useState(0);

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
          <div onClick={() => setModalPage("filter")}>
            {" "}
            <i class="fas fa-arrow-left"></i>
          </div>

          <div class="modal-title">
            <span class="modal-heading">Category</span>
            <span class="results">12 Results available</span>
          </div>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Enter Keywords to Search"
            aria-label="Search"
          />

          <ul className="child-categories pt-3 ps-0">
            {categoryObj.map((cat) => (
              <li>
                <input
                  id="radio-1"
                  class="radio-custom"
                  name="radio-group"
                  type="radio"
                />
                <label for="radio-1" class="radio-custom-label">
                  {cat.name}
                </label>
              </li>
            ))}
          </ul>
          <button className="view-btn d-block w-100 mt-4 "> Choose</button>
          <button
            className="reset-filter d-block"
            onClick={() => setCategorySelection(0)}
          >
            {" "}
            Cancel
          </button>
        </div>
      </>
    );
  }
}

export default FilterModal;

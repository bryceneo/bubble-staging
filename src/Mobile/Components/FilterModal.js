import React, { useEffect, useState } from "react";

function FilterModal({
  selectedCategory,
  setSelectedCategory,
  selectedFieldOfStudy,
  setSelectedFieldOfStudy,
  selectedMajorBody,
  setSelecteMajorBody,
  selectedInfluenceImpact,
  setSelecteInfluenceImpact,
  setIsModalOpen,
}) {
  const [modalPage, setModalPage] = useState("filter");
  const categoryObj = [
    { id: 1, name: "Social Sciences" },
    { id: 2, name: "Humanities" },
    { id: 3, name: "Life Sciences" },
    { id: 4, name: "Mathematical Sciences" },
    { id: 5, name: "Physical Sciences" },
    { id: 6, name: "Social Sciences" },
  ];
  const filterObj = [
    { id: 1, name: " Anthropology " },
    { id: 2, name: "Economics" },
    { id: 3, name: " Chemical Engineering " },
    { id: 4, name: " Physics " },
    { id: 5, name: " History" },
    { id: 6, name: " Mathematics " },
  ];
  const majorbodyObj = [
    { id: 1, name: " Plant Genetics" },
    { id: 2, name: " Polymer Science " },
    { id: 3, name: " Material Engineering" },
    { id: 4, name: " Cell  Biology" },
    { id: 5, name: "  Biophysics " },
    { id: 6, name: "Supramolecular Chemistry" },
  ];
  const influenceImpactObj = [
    { id: 1, name: "Molecular Chemistry" },
    { id: 2, name: "Archaeology" },
    { id: 3, name: "Theoretical Linguistics" },
    { id: 4, name: "Mathematical Sciences" },
    { id: 5, name: "Biochemistry" },
    { id: 6, name: "Database Optimization" },
  ];
  const handleResetFilter = () => {
    setSelectedCategory(0);
    setSelectedFieldOfStudy(0);
    setSelecteMajorBody(0);
    setSelecteInfluenceImpact(0);
    setIsModalOpen(false);
  };
  const handleApplyFilter = () => {
    setIsModalOpen(false);
  };

  const [categorySelection, setCategorySelection] = useState(selectedCategory);
  const [fieldOfStudySelection, setFieldOfStudySelection] =
    useState(selectedFieldOfStudy);
  // console.log("categorySelection", categorySelection);
  const [majorbodyWorkSelection, setMajorBodyworkSelection] =
    useState(selectedMajorBody);
  const [influenceImpactSelection, setInfluenceImpactSelection] = useState(
    selectedInfluenceImpact
  );
  // console.log("majorbodySelection", majorbodyWorkSelection);
  const handleCategoryChoose = () => {
    setSelectedCategory(categorySelection);
    setIsModalOpen(false);
  };
  const handleFieldOfStudyChoose = () => {
    setSelectedFieldOfStudy(fieldOfStudySelection);
    setIsModalOpen(false);
  };
  const handleMajorBodyChoose = () => {
    setSelecteMajorBody(majorbodyWorkSelection);
    setIsModalOpen(false);
  };
  const handleInfluenceImpactChoose = () => {
    setSelecteInfluenceImpact(influenceImpactSelection);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
            {selectedCategory
              ? categoryObj[selectedCategory - 1].name
              : undefined}
          </span>
        </div>
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("fieldOfStudy")}
        >
          <p className="m-0">Field of Study</p>
          <span className="category-span d-block">
            {selectedFieldOfStudy
              ? categoryObj[selectedFieldOfStudy - 1].name
              : undefined}
          </span>
        </div>
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("majorBodyOfWork")}
        >
          <p className="m-0">Major Body of Work</p>
          <span className="category-span d-block">
            {selectedMajorBody
              ? majorbodyObj[selectedMajorBody - 1].name
              : undefined}
          </span>
        </div>
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("influenceImpact")}
        >
          <p className="m-0">Influence/Impact Area</p>
          <span className="category-span d-block">
            {selectedInfluenceImpact
              ? influenceImpactObj[selectedInfluenceImpact - 1].name
              : undefined}
          </span>
        </div>
        <div className="category pt-4 pb-4">
          <p className="m-0">Year</p>
          <span className="category-span d-block">2019,2020,2021</span>
        </div>

        <button
          className="view-btn d-block w-100 mt-4 "
          onClick={handleApplyFilter}
        >
          Apply Filter
        </button>
        <button className="reset-filter d-block" onClick={handleResetFilter}>
          Reset Filter
        </button>
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
                  id={`radio-${cat.id}`}
                  class="radio-custom"
                  name="radio-group"
                  type="radio"
                  checked={categorySelection == cat.id}
                  onClick={() => setCategorySelection(cat.id)}
                />
                <label for={`radio-${cat.id}`} class="radio-custom-label">
                  {cat.name}
                </label>
              </li>
            ))}
          </ul>
          <button
            className="view-btn d-block w-100 mt-4 "
            onClick={handleCategoryChoose}
          >
            {" "}
            Choose
          </button>
          <button className="reset-filter d-block" onClick={handleCancel}>
            {" "}
            Cancel
          </button>
        </div>
      </>
    );
  }
  if (modalPage === "fieldOfStudy") {
    return (
      <>
        <div>
          <div onClick={() => setModalPage("filter")}>
            {" "}
            <i class="fas fa-arrow-left"></i>
          </div>

          <div class="modal-title">
            <span class="modal-heading">Field Of Study</span>
            <span class="results">12 Results available</span>
          </div>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Enter Keywords to Search"
            aria-label="Search"
          />

          <ul className="child-categories pt-3 ps-0">
            {filterObj.map((filter) => (
              <li>
                <input
                  id={`radio-${filter.id}`}
                  class="radio-custom"
                  name="radio-group"
                  type="radio"
                  checked={fieldOfStudySelection == filter.id}
                  onClick={() => setFieldOfStudySelection(filter.id)}
                />
                <label for={`radio-${filter.id}`} class="radio-custom-label">
                  {filter.name}
                </label>
              </li>
            ))}
          </ul>
          <button
            className="view-btn d-block w-100 mt-4 "
            onClick={handleFieldOfStudyChoose}
          >
            {" "}
            Choose
          </button>
          <button className="reset-filter d-block" onClick={handleCancel}>
            {" "}
            Cancel
          </button>
        </div>
      </>
    );
  }
  if (modalPage === "majorBodyOfWork") {
    return (
      <>
        <div>
          <div onClick={() => setModalPage("filter")}>
            {" "}
            <i class="fas fa-arrow-left"></i>
          </div>

          <div class="modal-title">
            <span class="modal-heading">Major Body of Work</span>
            <span class="results">12 Results available</span>
          </div>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Enter Keywords to Search"
            aria-label="Search"
          />

          <ul className="child-categories pt-3 ps-0">
            {majorbodyObj.map((filter) => (
              <li>
                <input
                  id={`radio-${filter.id}`}
                  class="radio-custom"
                  name="radio-group"
                  type="radio"
                  checked={majorbodyWorkSelection == filter.id}
                  onClick={() => setMajorBodyworkSelection(filter.id)}
                />
                <label for={`radio-${filter.id}`} class="radio-custom-label">
                  {filter.name}
                </label>
              </li>
            ))}
          </ul>
          <button
            className="view-btn d-block w-100 mt-4 "
            onClick={handleMajorBodyChoose}
          >
            {" "}
            Choose
          </button>
          <button className="reset-filter d-block" onClick={handleCancel}>
            {" "}
            Cancel
          </button>
        </div>
      </>
    );
  }
  if (modalPage === "influenceImpact") {
    return (
      <>
        <div>
          <div onClick={() => setModalPage("filter")}>
            {" "}
            <i class="fas fa-arrow-left"></i>
          </div>

          <div class="modal-title">
            <span class="modal-heading">Influence/Impact Area</span>
            <span class="results">12 Results available</span>
          </div>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Enter Keywords to Search"
            aria-label="Search"
          />

          <ul className="child-categories pt-3 ps-0">
            {influenceImpactObj.map((filter) => (
              <li>
                <input
                  id={`radio-${filter.id}`}
                  class="radio-custom"
                  name="radio-group"
                  type="radio"
                  checked={influenceImpactSelection == filter.id}
                  onClick={() => setInfluenceImpactSelection(filter.id)}
                />
                <label for={`radio-${filter.id}`} class="radio-custom-label">
                  {filter.name}
                </label>
              </li>
            ))}
          </ul>
          <button
            className="view-btn d-block w-100 mt-4 "
            onClick={handleInfluenceImpactChoose}
          >
            {" "}
            Choose
          </button>
          <button className="reset-filter d-block" onClick={handleCancel}>
            {" "}
            Cancel
          </button>
        </div>
      </>
    );
  }
}

export default FilterModal;

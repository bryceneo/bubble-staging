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
  selectedYear,
  setSelecteYear,
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
  const yearObj = [
    { id: 1, year: 2000 },
    { id: 2, year: 2001 },
    { id: 3, year: 2002 },
    { id: 4, year: 2003 },
    { id: 5, year: 2004 },
    { id: 6, year: 2005 },
    { id: 7, year: 2006 },
    { id: 8, year: 2007 },
    { id: 9, year: 2008 },
    { id: 10, year: 2009 },
    { id: 11, year: 2010 },
    { id: 12, year: 2011 },
    { id: 13, year: 2012 },
    { id: 14, year: 2013 },
    { id: 15, year: 2014 },
    { id: 16, year: 2015 },
    { id: 17, year: 2016 },
    { id: 18, year: 2017 },
    { id: 19, year: 2018 },
    { id: 20, year: 2019 },
    { id: 21, year: 2020 },
    { id: 22, year: 2021 },
  ];
  const handleResetFilter = () => {
    setSelectedCategory(0);
    setSelectedFieldOfStudy(0);
    setSelecteMajorBody(0);
    setSelecteInfluenceImpact(0);
    selectedYear(0);
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
  const [yearSelection, setYearSelection] = useState(selectedInfluenceImpact);
  // console.log("majorbodySelection", majorbodyWorkSelection);

  //Search Terms
  const [categorySearch, setCategorySearch] = useState("");
  const [fieldOfStudySearch, setFieldOfStudySearch] = useState("");
  const [majorBodyOfWorkSearch, setMajorBodyOfWorkSearch] = useState("");
  const [influenceImpactSearch, setInfluenceImpactSearch] = useState("");
  const [yearSearch, setYearSearch] = useState("");

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
  const handleYearChoose = () => {
    setSelecteYear(yearSelection);
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
              ? filterObj[selectedFieldOfStudy - 1].name
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
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("yearSelect")}
        >
          <p className="m-0">Year</p>
          <span className="category-span d-block">
            {selectedYear ? yearObj[selectedYear - 1].year : undefined}
          </span>{" "}
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
            onChange={(e) => setCategorySearch(e.target.value)}
          />

          <ul className="child-categories pt-2 ps-0">
            {categoryObj
              .filter((val) => {
                if (categorySearch == "") {
                  return val;
                } else {
                  if (
                    val.name
                      .toLowerCase()
                      .includes(categorySearch.toLowerCase())
                  ) {
                    return val;
                  }
                }
              })
              .map((cat) => (
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
            onChange={(e) => setFieldOfStudySearch(e.target.value)}
          />

          <ul className="child-categories pt-3 ps-0">
            {filterObj
              .filter((val) => {
                if (fieldOfStudySearch == "") {
                  return val;
                } else {
                  if (
                    val.name
                      .toLowerCase()
                      .includes(fieldOfStudySearch.toLowerCase())
                  ) {
                    return val;
                  }
                }
              })
              .map((filter) => (
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
            onChange={(e) => setMajorBodyOfWorkSearch(e.target.value)}
          />

          <ul className="child-categories pt-3 ps-0">
            {majorbodyObj
              .filter((val) => {
                if (majorBodyOfWorkSearch == "") {
                  return val;
                } else {
                  if (
                    val.name
                      .toLowerCase()
                      .includes(majorBodyOfWorkSearch.toLowerCase())
                  ) {
                    return val;
                  }
                }
              })
              .map((filter) => (
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
            onChange={(e) => setInfluenceImpactSearch(e.target.value)}
          />

          <ul className="child-categories pt-3 ps-0">
            {influenceImpactObj
              .filter((val) => {
                if (influenceImpactSearch == "") {
                  return val;
                } else {
                  if (
                    val.name
                      .toLowerCase()
                      .includes(influenceImpactSearch.toLowerCase())
                  ) {
                    return val;
                  }
                }
              })
              .map((filter) => (
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

  if (modalPage === "yearSelect") {
    return (
      <>
        <div>
          <div onClick={() => setModalPage("filter")}>
            {" "}
            <i class="fas fa-arrow-left"></i>
          </div>

          <div class="modal-title">
            <span class="modal-heading">Year</span>
            <span class="results">12 Results available</span>
          </div>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Enter Keywords to Search"
            aria-label="Search"
            onChange={(e) => setYearSearch(e.target.value)}
          />

          <ul className="child-categories pt-3 ps-0">
            {yearObj
              .filter((val) => {
                if (yearSearch == "") {
                  return val;
                } else {
                  if (val.year.toString().includes(yearSearch)) {
                    return val;
                  }
                }
              })
              .map((filter) => (
                <li>
                  <input
                    id={`radio-${filter.id}`}
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                    checked={yearSelection == filter.id}
                    onClick={() => setYearSelection(filter.id)}
                  />
                  <label for={`radio-${filter.id}`} class="radio-custom-label">
                    {filter.year}
                  </label>
                </li>
              ))}
          </ul>
          <button
            className="view-btn d-block w-100 mt-4 "
            onClick={handleYearChoose}
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

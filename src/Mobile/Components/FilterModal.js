import React, { useEffect, useState } from "react";
import CategoriesData from "../Data/CategoriesData";
import Data from "../../Components/Data/AllData.json";
function FilterModal({
  selectedCategory,
  setSelectedCategory,
  selectedFieldOfStudy,
  setSelectedFieldOfStudy,
  majorBodyOfWork,
  setMajorBodyOfWork,
  InfluenceImpact,
  setInfluenceImpact,
  selectedYear,
  setSelectedYear,
  setIsModalOpen,
}) {
  const [modalPage, setModalPage] = useState("filter");
  const categoryObj = [
    "Select Category",
    "Social Sciences",
    "Physical Sciences",
    "Mathematical Sciences",
    "Life Sciences",
    "Humanities",
    "Engineering and Computer Science",
  ];
  const filterObj = [
    ...Array.from(
      new Set(
        Data?.Database?.map((item) =>
          item?.["Field of study and training"]
            ?.split(",")
            ?.map((item) => item.trim())
        )?.flat(10)
      )
    ),
  ];
  const majorbodyObj = [
    ...Array.from(
      new Set(
        Data?.Database?.map((item) =>
          item?.["Major body of work -time of prize"]
            ?.split(",")
            ?.map((item) => item.trim())
        )?.flat(10)
      )
    ),
  ];
  const influenceImpactObj = [
    ...Array.from(
      new Set(
        Data?.Database?.map((item) =>
          item?.["Influence/Impact"]?.split(",")?.map((item) => item.trim())
        )?.flat(10)
      )
    ),
  ];
  const yearObj = [
    ...Array.from(
      new Set(Data?.Database?.map((item) => item?.["Infosys Prize"]))
    ),
  ];
  const handleResetFilter = () => {
    setSelectedCategory("");
    setSelectedFieldOfStudy("");
    setMajorBodyOfWork("");
    setInfluenceImpact("");
    selectedYear("");
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
    useState(majorBodyOfWork);
  const [influenceImpactSelection, setInfluenceImpactSelection] =
    useState(InfluenceImpact);
  const [yearSelection, setYearSelection] = useState(InfluenceImpact);
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
    setMajorBodyOfWork(majorbodyWorkSelection);
    setIsModalOpen(false);
  };
  const handleInfluenceImpactChoose = () => {
    setInfluenceImpact(influenceImpactSelection);
    setIsModalOpen(false);
  };
  const handleYearChoose = () => {
    setSelectedYear(yearSelection);
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
            {/* {selectedCategory
              ? categoryObj[selectedCategory - 1].name
              : undefined} */}
            {selectedCategory || ""}
          </span>
        </div>
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("fieldOfStudy")}
        >
          <p className="m-0">Field of Study</p>
          <span className="category-span d-block">
            {/* {selectedFieldOfStudy
              ? filterObj[selectedFieldOfStudy - 1].name
              : undefined} */}
            {selectedFieldOfStudy || ""}
          </span>
        </div>
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("majorBodyOfWork")}
        >
          <p className="m-0">Major Body of Work</p>
          <span className="category-span d-block">{majorBodyOfWork || ""}</span>
        </div>
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("influenceImpact")}
        >
          <p className="m-0">Influence/Impact Area</p>
          <span className="category-span d-block">{InfluenceImpact || ""}</span>
        </div>
        <div
          className="category pt-4 pb-4"
          onClick={() => setModalPage("yearSelect")}
        >
          <p className="m-0">Year</p>
          <span className="category-span d-block">
            {selectedYear || ""}
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
            {/* <span class="results">12 Results available</span> */}
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
                    val.toLowerCase().includes(categorySearch.toLowerCase())
                  ) {
                    return val;
                  }
                }
              })
              .map((cat) => (
                <li>
                  <input
                    id={`radio-${cat}`}
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                    checked={categorySelection == cat}
                    onClick={() => setCategorySelection(cat)}
                  />
                  <label for={`radio-${cat}`} class="radio-custom-label">
                    {cat}
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
            {/* <span class="results">12 Results available</span> */}
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
                    val.toLowerCase().includes(fieldOfStudySearch.toLowerCase())
                  ) {
                    return val;
                  }
                }
              })
              .map((filter) => (
                <li>
                  <input
                    id={`radio-${filter}`}
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                    checked={fieldOfStudySelection == filter}
                    onClick={() => setFieldOfStudySelection(filter)}
                  />
                  <label for={`radio-${filter}`} class="radio-custom-label">
                    {filter}
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
                    val
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
                    id={`radio-${filter}`}
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                    checked={majorbodyWorkSelection == filter}
                    onClick={() => setMajorBodyworkSelection(filter)}
                  />
                  <label for={`radio-${filter}`} class="radio-custom-label">
                    {filter}
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
            {/* <span class="results">12 Results available</span> */}
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
                    val
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
                    id={`radio-${filter}`}
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                    checked={influenceImpactSelection == filter}
                    onClick={() => setInfluenceImpactSelection(filter)}
                  />
                  <label for={`radio-${filter}`} class="radio-custom-label">
                    {filter}
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
            {/* <span class="results">12 Results available</span> */}
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
                  if (toString(val).includes(yearSearch)) {
                    return val;
                  }
                }
              })
              .map((filter) => (
                <li>
                  <input
                    id={`radio-${filter}`}
                    class="radio-custom"
                    name="radio-group"
                    type="radio"
                    checked={yearSelection == filter}
                    onClick={() => setYearSelection(filter)}
                  />
                  <label for={`radio-${filter}`} class="radio-custom-label">
                    {filter}
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

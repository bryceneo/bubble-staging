import React, { useState } from "react";
import Modal from "react-modal";
import FilterModal from "./FilterModal";
import "./Styles/FilterHeader.css";
function FilterHeader({
  SelectedCategory,
  setSelectedCategory,
  selectedFieldOfStudy,
  setSelectedFieldOfStudy,
  majorBodyOfWork,
  setMajorBodyOfWork,
  InfluenceImpact,
  setInfluenceImpact,
  selectedYear,
  setSelectedYear,
  onBackClick,
}) {
  // const [selectedCategory, setSelectedCategory] = useState(0);
  // const [selectedFieldOfStudy, setSelectedFieldOfStudy] = useState(0);
  // const [selectedMajorBody, setSelecteMajorBody] = useState(0);
  // const [selectedInfluenceImpact, setSelecteInfluenceImpact] = useState(0);
  // const [selectedYear, setSelecteYear] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div id="filter-mob" className="d-flex justify-content-between">
        {onBackClick && (
          <i
            className="fa fa-arrow-left"
            style={{ fontSize: "16px", color: "white" }}
            onClick={onBackClick}
          ></i>
        )}
        <div style={{ textTransform: "uppercase" }}>Infosys Prize</div>
        <div className="filter-icon" onClick={openModal}></div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        // portalClassName="filter-modal"
        className={"filter-modal"}
      >
        <FilterModal
          SelectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedFieldOfStudy={selectedFieldOfStudy}
          setSelectedFieldOfStudy={setSelectedFieldOfStudy}
          setIsModalOpen={setIsModalOpen}
          majorBodyOfWork={majorBodyOfWork}
          setMajorBodyOfWork={setMajorBodyOfWork}
          InfluenceImpact={InfluenceImpact}
          setInfluenceImpact={setInfluenceImpact}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </Modal>
    </>
  );
}

export default FilterHeader;

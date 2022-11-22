import React, { useState } from "react";
import Modal from "react-modal";
import FilterModal from "./FilterModal";
import "./Styles/FilterHeader.css";
function FilterHeader() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedFieldOfStudy, setSelectedFieldOfStudy] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div id="filter-mob" onClick={openModal}>
        FilterHeader
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        // portalClassName="filter-modal"
        className={"filter-modal"}
      >
        <FilterModal
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedFieldOfStudy={selectedFieldOfStudy}
          setSelectedFieldOfStudy={setSelectedFieldOfStudy}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
}

export default FilterHeader;

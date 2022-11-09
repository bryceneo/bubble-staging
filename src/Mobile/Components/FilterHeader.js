import React, { useState } from "react";
import Modal from "react-modal";
import FilterModal from "./FilterModal";
import "./Styles/FilterHeader.css";
function FilterHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div onClick={openModal}>FilterHeader</div>;
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        portalClassName=""
      >
        <FilterModal />
      </Modal>
    </>
  );
}

export default FilterHeader;

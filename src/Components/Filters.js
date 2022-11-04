import React from "react";
import "./styles/Filters.css";

function Filters() {
  return (
    <div id="filters">
      <div class="select-container">
        <span class="active-class-rem"></span>
        <div class="select">
          <span class="sort-label">Category</span>
          <input
            type="text"
            class="input"
            placeholder="Choose Category"
            onfocus="this.blur();"
          />
        </div>
        <div class="option-container">
          <div class="option">
            <label> Category 1 </label>
          </div>
          <div class="option">
            <label>Category 2</label>
          </div>
          <div class="option">
            <label>Category 3</label>
          </div>
          <div class="option">
            <label>Category 4</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

import React, { useState } from "react";
import CategoriesData from "./Data/CategoriesData";
import "./styles/Categories.css";

function Categories({ mobileView }) {
  const [catgories, setcategories] = useState(CategoriesData);
  const mobileStyle = mobileView && {
    display: "flex",
    flexWrap: "wrap",
    // rowGap: "10px",
    gap: "10px",
    listStyleType: "none",
    fontSize: "12px",
  };
  return (
    <>
      <div>
        {!mobileView && <h6 className="categories-title">Categories</h6>}
        <div>
          <ul
            className={!mobileView ? "categories-list p-0" : "categories-list px-2"}
            style={mobileStyle}
          >
            {catgories.map((category) => {
              return (
                <li key={category.id}>
                  <span>{category.name}</span>
                  <span>
                    <div
                      id="circle1"
                      style={{ backgroundColor: category.colorCode }}
                    ></div>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Categories;

import React, { useState } from "react";
import CategoriesData from "../Data/CategoriesData";
import "./Styles/Categories.css";

function Categories() {
  const [catgories, setcategories] = useState(CategoriesData);
  return (
    <>
      <div>
        <h6 className="categories-title d-none d-lg-block d-xl-none">Categories</h6>
        <div>
          <ul className="categories-list-mobile p-0">
            {catgories.map((category) => {
              return (
                <li key={category.id}>
                  <span>{category.name}</span>
                  <span>
                    <div
                      id="circle1" className="d-none d-lg-block d-xl-none"
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

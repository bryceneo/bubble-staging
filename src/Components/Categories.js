import React, { useState } from "react";
import CategoriesData from "./Data/CategoriesData";
import "./styles/Categories.css";

function Categories() {
  const [catgories, setcategories] = useState(CategoriesData);
  return (
    <>
      <div>
        <h6 className="categories-title">Categories</h6>
        <div>
          <ul className="categories-list p-0">
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

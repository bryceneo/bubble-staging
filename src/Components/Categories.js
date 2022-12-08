import React, { useState } from "react";
import CategoriesData from "./Data/CategoriesData";
import "./styles/Categories.css";

function Categories({ SelectedCategory, setSelectedCategory }) {
  const [catgories, setcategories] = useState(CategoriesData);
  return (
    <>
      <div>
        <h6 className="categories-title">Categories</h6>
        <div>
          <ul className="categories-list ">
            {catgories.map((category) => {
              return (
                <li
                  key={category.id}
                  onClick={() => setSelectedCategory(category?.name)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <span>{category.name}</span>
                  <span>
                    <div
                      id="circle1"
                      style={{
                        backgroundColor: category.colorCode,
                        outline:
                          SelectedCategory === category?.name
                            ? "1px solid " + category.colorCode
                            : "none",
                        outlineOffset: "2px",
                      }}
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

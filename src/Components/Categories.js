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
                  <span
                    style={{
                      border:
                        SelectedCategory === category?.name
                          ? "1px solid" + category.colorCode
                          : "",
                      padding: "1px",
                      borderRadius: "100%",
                      // textAlign: "center",
                      // display: "flex",
                      // justifyContent: "center",
                      // alignItems: "center",
                      // width: "20px",
                      // height: "20px",
                      // width: "fitContent",
                      // height: "fitContent",
                    }}
                  >
                    <div
                      id="circle1"
                      style={{
                        backgroundColor: category.colorCode,
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

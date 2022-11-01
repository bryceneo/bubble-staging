import React, { useState } from "react";
import CategoriesData from "./Data/CategoriesData";
import "./styles/Categories.css";

function Categories() {
  const [catgories, setcategories] = useState(CategoriesData);
  return (
    <>
      <div>
        <h4>category</h4>
        <div>
          {catgories.map((category) => {
            return (
              <div>
                {category.name}{" "}
                <span>
                  <div id="circle1"></div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;

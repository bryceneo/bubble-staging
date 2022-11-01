import React, { useState } from "react";
import CategoriesData from "./Data/CategoriesData";

function Categories() {
  const [catgories, setcategories] = useState(CategoriesData);
  return (
    <>
      <div>
        <h4>category</h4>
        <div>
          {catgories.map((category) => {
            return <div>{category.name}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;

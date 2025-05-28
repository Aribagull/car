import React, { useState } from "react";
import ProductCategories from "./ProductCategory";
import Products from "./Product";


const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <ProductCategories onSelectCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
};

export default CategoryPage;

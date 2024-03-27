import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // Other filter state variables

  const handleFilterChange = () => {
    const filters = {
      category,
      minPrice,
      maxPrice,
      // Other filters
    };
    onFilterChange(filters);
  };

  return (
    <div>
      <h2>Filter Products</h2>
      {/* Render filter inputs and dropdowns */}
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;

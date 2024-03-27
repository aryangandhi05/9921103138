import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import axios from "axios";
import "./allproducts.css";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (filters = {}) => {
    try {
      const response = await axios.get("/categories/Phone/products", {
        params: filters,
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleFilterChange = (filters) => {
    fetchProducts(filters);
  };

  return (
    <div>
      <h1>All Products Page</h1>
      <Filter onFilterChange={handleFilterChange} />
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;

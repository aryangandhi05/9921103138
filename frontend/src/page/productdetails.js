import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import axios from "axios";
import "./productsdetails.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(productId);
  }, [productId]);

  const fetchProductById = async (productId) => {
    try {
      const response = await axios.get(
        `/categories/Phone/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div>
      <h1>Product Details Page</h1>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;

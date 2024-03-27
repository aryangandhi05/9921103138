import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.productName}</p>
      <p>Company: {product.company}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;

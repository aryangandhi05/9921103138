const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Mock data for products
const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: 100,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Product 2",
    category: "Electronics",
    price: 200,
    rating: 4.0,
  },
  // Add more products as needed
];

// Mock API endpoint to get products
app.get("/categories/:categoryname/products", (req, res) => {
  const { categoryname } = req.params;
  const filteredProducts = products.filter(
    (product) => product.category === categoryname
  );
  res.json(filteredProducts);
});

// Mock API endpoint to get a specific product
app.get("/categories/:categoryname/products/:productid", (req, res) => {
  const { productid } = req.params;
  const product = products.find((p) => p.id === parseInt(productid));
  if (!product) return res.status(404).send("Product not found.");
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const axios = require("axios");

// Function to fetch products from the test server
exports.getProducts = async (req, res) => {
  const { categoryName } = req.params;
  const { top, minPrice, maxPrice, sort, order, page } = req.query;

  try {
    const response = await axios.get(
      `http://20.244.56.144/test/companies/AMZ/categories/${categoryName}/products`,
      {
        params: {
          top,
          minPrice,
          maxPrice,
          sort,
          order,
          page,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Function to fetch a single product by ID from the test server
exports.getProductById = async (req, res) => {
  const { categoryName, productId } = req.params;

  try {
    const response = await axios.get(
      `http://20.244.56.144/test/companies/AMZ/categories/${categoryName}/products/${productId}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

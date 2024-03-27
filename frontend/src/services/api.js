import axios from "axios";

const baseURL = "http://20.244.56.144/test";

export const fetchProducts = async (category, filters = {}) => {
  try {
    const response = await axios.get(
      `${baseURL}/categories/${category}/products`,
      { params: filters }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (category, productId) => {
  try {
    const response = await axios.get(
      `${baseURL}/categories/${category}/products/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};

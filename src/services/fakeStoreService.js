import axios from "axios";

const apiUrl = "https://fakestoreapi.com/products";

export const getAllProducts = () => {
  return axios.get(apiUrl)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

export const getProductById = (productId) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching product:", error);
      throw error;
    });
};

export const getProductsByCategory = (category) => {
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching products by category:", error);
      throw error;
    });
};
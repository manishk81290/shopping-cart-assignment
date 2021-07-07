import axios from "axios";
import { GETPRODUCTURL } from "./config";

const CategoryService = {
  getProducts: async () => {
    try {
      const response = await axios.get(GETPRODUCTURL);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  getProductById: async (productId) => {
    try {
      const response = await axios.get(GETPRODUCTURL);
      console.log(response.data.filter((prod) => prod.id === productId));
    } catch (error) {
      console.log(error);
    }
  },
  getProductByCategoryId: async (categoryId) => {
    try {
      const response = await axios.get(GETPRODUCTURL);
      console.log(response.data.filter((prod) => prod.category === categoryId));
    } catch (error) {
      console.log(error);
    }
  },
};

export default CategoryService;

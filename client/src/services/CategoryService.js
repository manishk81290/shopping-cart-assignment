import axios from "axios";
import { GETCATEGORYURL } from "./config";

const CategoryService = {
  getCategories: async () => {
    try {
      const response = await axios.get(GETCATEGORYURL);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  getCategoryById: async (categoryId) => {
    try {
      const response = await axios.get(GETCATEGORYURL);
      console.log(response.data.filter((cat) => cat.id === categoryId));
    } catch (error) {
      console.log(error);
    }
  },
};

export default CategoryService;

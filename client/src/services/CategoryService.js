import { CATEGORY_URL } from "./config";
import { get } from "./api";

const CategoryService = {
  getCategories: async () => {
    try {
      return get(CATEGORY_URL);
    } catch (error) {
      console.log(error);
    }
  },
};

export default CategoryService;

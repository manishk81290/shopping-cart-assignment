import { PRODUCT_URL } from "./config";
import { get } from "./api";

const ProductService = {
  getProducts: async () => {
    try {
      return get(PRODUCT_URL);
    } catch (error) {
      console.log(error);
    }
  },
};

export default ProductService;

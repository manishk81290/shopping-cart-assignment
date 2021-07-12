import { post } from "./api";
import { CART_URL } from "./config";

const CartService = {
  addToCart: async () => {
    try {
      return post(CART_URL);
    } catch (error) {
      console.log(error);
    }
  },
};

export default CartService;

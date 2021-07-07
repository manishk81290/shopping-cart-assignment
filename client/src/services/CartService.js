import axios from "axios";
import { CART_URL } from "./config";

const CartService = {
  addToCart: async () => {
    try {
      let response = [];
      await axios.get(CART_URL).then((res) => {
        response = res.data;
        console.log(res);
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default CartService;

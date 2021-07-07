import axios from "axios";
import { POSTCARTURL } from "./config";

const CartService = {
  addToCart: async () => {
    try {
      let response = [];
      await axios.get(POSTCARTURL).then((res) => {
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

import { UPDATE_CART, GET_PRODUCT, GET_CATEGORY, GET_BANNER } from "./types";

const ShoppingReducer = (state, action) => {
  switch (action.type) {
    case GET_BANNER:
      return {
        ...state,
        banners: action.payload,
      };

    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default ShoppingReducer;

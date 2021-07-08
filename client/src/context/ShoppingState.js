import React, { useReducer } from "react";

import ShoppingContext from "./ShoppingContext";
import ShoppingReducer from "./ShoppingReducer";
import BannerService from "../services/BannerService";
import CategoryService from "../services/CategoryService";
import ProductService from "../services/ProductService";
import CartService from "../services/CartService";
import { GET_BANNER, GET_CATEGORY, GET_PRODUCT, UPDATE_CART } from "./types";

const ShoppingState = (props) => {
  const initState = {
    banners: [],
    products: [],
    categories: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(ShoppingReducer, initState);

  const getBanners = () => {
    BannerService.getBanners().then(({ ...res }) => {
      const data = res.data.sort((a, b) => a.order - b.order);
      dispatch({
        type: GET_BANNER,
        payload: data,
      });
    });
  };

  const getProducts = () => {
    ProductService.getProducts().then(({ ...res }) => {
      const data = res.data.sort((a, b) => a.order - b.order);
      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    });
  };

  const getCategories = () => {
    CategoryService.getCategories().then(({ ...res }) => {
      const data = res.data.sort((a, b) => a.order - b.order);
      dispatch({
        type: GET_CATEGORY,
        payload: data,
      });
    });
  };

  const updateCart = (item) => {
    CartService.addToCart().then(({ ...res }) => {
      //const data = res.data;
      dispatch({
        type: UPDATE_CART,
        payload: item,
      });
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        banners: state.banners,
        categories: state.categories,
        products: state.products,
        cart: state.cart,
        getBanners,
        getCategories,
        getProducts,
        updateCart,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingState;

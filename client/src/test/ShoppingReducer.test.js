import ShoppingReducer from "./../context/ShoppingReducer";
import {
  GET_BANNER,
  GET_PRODUCT,
  GET_CATEGORY,
  UPDATE_CART,
} from "../context/types";

const initialState = {
  banners: [],
  products: [],
  categories: [],
  cart: [],
};

const bannerAction = {
  type: GET_BANNER,
  payload: [
    {
      bannerImageUrl: "/static/images/offers/offer1.jpg",
      bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
      isActive: true,
      order: 1,
      id: "5b6c38156cb7d770b7010ccc",
    },
  ],
};

const bannerState = {
  banners: [
    {
      bannerImageUrl: "/static/images/offers/offer1.jpg",
      bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
      isActive: true,
      order: 1,
      id: "5b6c38156cb7d770b7010ccc",
    },
  ],
  products: [],
  categories: [],
  cart: [],
};

const productsAction = {
  type: GET_PRODUCT,
  payload: [
    {
      name: "Tata Tea Gold Leaf Tea, 500 gm",
      imageURL: "/static/images/products/beverages/tata-tea.jpg",
      description:
        "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
      price: 165,
      stock: 50,
      category: "5b675e5e5936635728f9fc30",
      sku: "bev-tata-tea-500",
      id: "5b6c6f4a01a7c3842953088c",
    },
  ],
};

const productsState = {
  banners: [],
  products: [
    {
      name: "Tata Tea Gold Leaf Tea, 500 gm",
      imageURL: "/static/images/products/beverages/tata-tea.jpg",
      description:
        "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
      price: 165,
      stock: 50,
      category: "5b675e5e5936635728f9fc30",
      sku: "bev-tata-tea-500",
      id: "5b6c6f4a01a7c3842953088c",
    },
  ],
  categories: [],
  cart: [],
};

const categoriesAction = {
  type: GET_CATEGORY,
  payload: [
    {
      name: "Baby Care",
      key: "baby",
      description:
        "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
      enabled: true,
      order: 5,
      imageUrl: "/static/images/category/baby.png",
      id: "5b6899683d1a866534f516e0",
    },
  ],
};

const categoriesState = {
  banners: [],
  products: [],
  categories: [
    {
      name: "Baby Care",
      key: "baby",
      description:
        "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
      enabled: true,
      order: 5,
      imageUrl: "/static/images/category/baby.png",
      id: "5b6899683d1a866534f516e0",
    },
  ],
  cart: [],
};

const cartAction = {
  type: UPDATE_CART,
  payload: [
    {
      name: "Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty 100G Pack of 3",
      imageURL: "/static/images/products/beauty-hygiene/dove.jpg",
      description:
        "Dove Cream Beauty Bar combines a gentle cleansing formula with Doves signature 1/4 moisturizing cream to give you softer, smoother and more glowing skin.",
      price: 622,
      stock: 50,
      category: "5b68994e3d1a866534f516df",
      sku: "bh-dove-combo",
      id: "5b6c71e601a7c38429530892",
      count: 1,
    },
  ],
};

const cartState = {
  banners: [],
  products: [],
  categories: [],
  cart: [
    {
      name: "Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty 100G Pack of 3",
      imageURL: "/static/images/products/beauty-hygiene/dove.jpg",
      description:
        "Dove Cream Beauty Bar combines a gentle cleansing formula with Doves signature 1/4 moisturizing cream to give you softer, smoother and more glowing skin.",
      price: 622,
      stock: 50,
      category: "5b68994e3d1a866534f516df",
      sku: "bh-dove-combo",
      id: "5b6c71e601a7c38429530892",
      count: 1,
    },
  ],
};

describe("Shopping Reducer Component Test cases", () => {
  it("Update banners state using ShoppingReducer", () => {
    const updatedState = ShoppingReducer(initialState, bannerAction);
    expect(updatedState).toEqual(bannerState);
  });
  it("Update products state using ShoppingReducer", () => {
    const updatedState = ShoppingReducer(initialState, productsAction);
    expect(updatedState).toEqual(productsState);
  });
  it("Update categories state using ShoppingReducer", () => {
    const updatedState = ShoppingReducer(initialState, categoriesAction);
    expect(updatedState).toEqual(categoriesState);
  });
  it("Update cart state using ShoppingReducer", () => {
    const updatedState = ShoppingReducer(initialState, cartAction);
    expect(updatedState).toEqual(cartState);
  });
});

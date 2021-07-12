import React from "react";
import ProductItem from "./../components/products/ProductItem";
import ShallowRenderer from "react-test-renderer/shallow";

let realUseContext;
let useContextMock;
const sampleContextData = {
  cart: [
    {
      name: "Sandwich Bread - White, Chemical Free, 400 gm",
      imageURL: "/static/images/products/bakery-cakes-dairy/bread.jpg",
      description:
        "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.",
      price: 32,
      stock: 50,
      category: "5b6899123d1a866534f516de",
      sku: "bcd-bread-400",
      id: "5b6c6d3201a7c38429530888",
      count: 2,
    },
  ],
  updateCart: () => {},
};

const testProps = {
  item: {
    name: "Epigamia Greek Yogurt - Blueberry, 90 gm Cup",
    imageURL: "/static/images/products/bakery-cakes-dairy/yogurt-blue.jpg",
    description:
      "Epigama means in Ancient Greek meant a way to Formalize the relationship between different nations. Epigamia greek yogurt is one of the most authentic yoghurts which advocates a healthy lifestyle with delicious taste. An excellent source of protein without the added fat.",
    price: 40,
    stock: 50,
    category: "5b6899123d1a866534f516de",
    sku: "bcd-yogurt-blue",
    id: "5b6c6d9e01a7c3842953088a",
  },
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

it("ProductItem with mock useContext hook", () => {
  useContextMock.mockReturnValue(sampleContextData);
  const element = new ShallowRenderer().render(<ProductItem {...testProps} />);
  expect(element).toBeTruthy();
  expect(element).toMatchSnapshot();
});

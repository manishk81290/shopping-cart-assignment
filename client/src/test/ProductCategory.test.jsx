import React from "react";
import ProductCategory from "./../components/products/ProductCategory";
import ShallowRenderer from "react-test-renderer/shallow";

let realUseContext;
let useContextMock;
const sampleContextData = {
  categories: [
    {
      name: "Beauty and Hygiene",
      key: "beauty-hygiene",
      description:
        "Buy beauty and personal care products online in India at best prices.",
      enabled: true,
      order: 4,
      imageUrl: "/static/images/category/beauty.png",
      id: "5b68994e3d1a866534f516df",
    },
  ],
  getCategories: () => {},
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

it("ProductCategory with mock useContext hook", () => {
  useContextMock.mockReturnValue(sampleContextData);
  const element = new ShallowRenderer().render(<ProductCategory />);
  expect(element).toBeTruthy();
  expect(element).toMatchSnapshot();
});

import React from "react";
import Category from "./../components/categories/Category";
import ShallowRenderer from "react-test-renderer/shallow";

let realUseContext;
let useContextMock;
const sampleContextData = {
  categories: [
    {
      name: "Beverages",
      key: "beverages",
      description:
        "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
      enabled: true,
      order: 3,
      imageUrl: "/static/images/category/beverages.png",
      id: "5b675e5e5936635728f9fc30",
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

it("Category with mock useContext hook", () => {
  useContextMock.mockReturnValue(sampleContextData);
  const element = new ShallowRenderer().render(<Category />);
  expect(element).toBeTruthy();
  expect(element).toMatchSnapshot();
});

import React from "react";
import Category from "./../components/categories/Category";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

let realUseContext;
let useContextMock;
let useEffect;
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

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const useEffectMock = () => {
  useEffect.mockImplementationOnce((f) => f());
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
  useEffect = jest.spyOn(React, "useEffect");
  useEffectMock();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

describe("Category Component Test cases", () => {
  it("Category Component should match with snapshot", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<Category />);
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });

  it("Category Component Button should navigate to products page for the category on which it is clicked", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<Category />);
    const exploreRightButton = element.find(".get-product");
    exploreRightButton.simulate("click");
  });
});

import React from "react";
import ProductCategory from "./../components/products/ProductCategory";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
let realUseContext;
let useContextMock;
let useEffect;
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

const sampleContextEmptyData = {
  categories: [],
  getCategories: () => {},
};

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

describe("ProductCategory Component Test cases", () => {
  it("ProductCategory without any specific category", () => {
    useContextMock.mockReturnValue(sampleContextEmptyData);
    const element = shallow(<ProductCategory />);
    expect(element).toBeTruthy();
  });

  it("ProductCategory should render and match with snapshot", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<ProductCategory />);
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
});

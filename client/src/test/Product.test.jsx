import React from "react";
import Product from "./../components/products/Product";
import ShallowRenderer from "react-test-renderer/shallow";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
let realUseContext;
let useContextMock;
let useEffect;
const sampleContextData = {
  products: [
    {
      name: "Capsicum - Green, 1 kg",
      imageURL: "/static/images/products/fruit-n-veg/capsicum-green.jpg",
      description:
        "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
      price: 137,
      stock: 50,
      category: "5b6899953d1a866534f516e2",
      sku: "fnw-capsicum-1",
      id: "5b6c6bdc01a7c38429530886",
      count: 2,
    },
  ],
  getProducts: () => {},
};

const sampleContextEmptyData = {
  products: [],
  getProducts: () => {},
};

const useEffectMock = () => {
  useEffect.mockImplementationOnce((f) => f());
};

const testPropsAll = {
  match: {
    params: {
      productCategory: "all",
    },
  },
};

const testProps = {
  match: {
    params: {
      productCategory: "5b6c6f4a01a7c3842953088c",
    },
  },
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
  useEffect = jest.spyOn(React, "useEffect");
  useEffectMock();
  useEffectMock();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

describe("Product Component Test cases", () => {
  it("All products should appear with productCategory as all", () => {
    useContextMock.mockReturnValue(sampleContextEmptyData);
    const element = new ShallowRenderer().render(<Product {...testPropsAll} />);
    expect(element).toBeTruthy();
  });

  it("Product with all productCategory", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = new ShallowRenderer().render(<Product {...testPropsAll} />);
    expect(element).toBeTruthy();
  });

  it("Product with specific productCategory", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<Product {...testProps} />);
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
});

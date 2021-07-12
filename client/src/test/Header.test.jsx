import React from "react";
import Header from "./../components/layout/Header";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
let realUseContext;
let useContextMock;
const sampleContextData = {
  cart: [
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
};

const testProps = {
  handleShow: jest.fn(),
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

test("Header with mock useContext hook", () => {
  useContextMock.mockReturnValue(sampleContextData);
  const tree = shallow(<Header {...testProps} />);
  expect(tree).toBeTruthy();
  tree.find(".cart-btn").simulate("click");
  expect(testProps.handleShow).toHaveBeenCalledTimes(1);
});

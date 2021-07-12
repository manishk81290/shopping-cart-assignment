import React from "react";
import CartItem from "./../components/cart/CartItem";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

const testProps = {
  item: {
    name: "Red Label Tea, 500 gm Carton",
    imageURL: "/static/images/products/beverages/red-label.jpg",
    description:
      "Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves.",
    price: 205,
    stock: 50,
    category: "5b675e5e5936635728f9fc30",
    sku: "bev-red-label-500",
    id: "5b6c6f8301a7c3842953088d",
    count: 3,
  },
  index: 1,
  updateQuantity: jest.fn(),
};

describe("Cart Component test Suit", () => {
  it("CartItem should match with snapshot", () => {
    const tree = shallow(<CartItem {...testProps} />);
    expect(tree).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
  it("Cart Item quantity decrease test", () => {
    //useContextMock.mockReturnValue(sampleContextData);
    const tree = shallow(<CartItem {...testProps} />);
    const decreaseQuantityBtn = tree.find(".quantity-dec");
    decreaseQuantityBtn.simulate("click", "decrement", testProps.index);
  });
  it("Cart Item should be removed if quantity decrease from 1 to 0", () => {
    //useContextMock.mockReturnValue(sampleContextDatawithSingleCartItem);
    const tree = shallow(<CartItem {...testProps} />);
    const decreaseQuantityBtn = tree.find(".quantity-dec");
    decreaseQuantityBtn.simulate("click", "decrement", testProps.index);
  });
  it("Cart Item quantity increase test", () => {
    //useContextMock.mockReturnValue(sampleContextData);
    const tree = shallow(<CartItem {...testProps} />);
    const increaseQuantityBtn = tree.find(".quantity-inc");
    increaseQuantityBtn.simulate("click", "increment", testProps.index);
  });
});

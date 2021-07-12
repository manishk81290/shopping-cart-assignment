import React from "react";
import CartItem from "./../components/cart/CartItem";
import ShallowRenderer from "react-test-renderer/shallow";

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
  updateQuantity: 1,
};

it("CartItem with mock useContext hook", () => {
  const element = new ShallowRenderer().render(<CartItem {...testProps} />);
  expect(element).toBeTruthy();
  expect(element).toMatchSnapshot();
});

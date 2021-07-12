import CartService from "./../services/CartService";

it("Cart Service function should be truthy", () => {
  expect(CartService.addToCart()).toBeTruthy();
});

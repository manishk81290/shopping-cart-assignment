import ProductService from "./../services/ProductService";

it("Product Service function should be truthy", () => {
  expect(ProductService.getProducts()).toBeTruthy();
});

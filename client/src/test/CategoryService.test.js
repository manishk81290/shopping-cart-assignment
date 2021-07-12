import CategoryService from "./../services/CategoryService";

it("Category Service function should be truthy", () => {
  expect(CategoryService.getCategories()).toBeTruthy();
});

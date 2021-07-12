import React from "react";
import CategoryItem from "./../components/categories/CategoryItem";
import ShallowRenderer from "react-test-renderer/shallow";

it("CategoryItem with mock useContext hook", () => {
  const element = new ShallowRenderer().render(<CategoryItem />);
  expect(element).toBeTruthy();
  expect(element).toMatchSnapshot();
});

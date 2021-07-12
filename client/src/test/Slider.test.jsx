import React from "react";
import Slider from "./../components/layout/Slider";
import ShallowRenderer from "react-test-renderer/shallow";

let realUseContext;
let useContextMock;
const sampleContextData = {
  banners: [
    {
      bannerImageUrl: "/static/images/offers/offer1.jpg",
      bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
      isActive: true,
      order: 1,
      id: "5b6c38156cb7d770b7010ccc",
    },
  ],
  getBanners: () => {},
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

test("Slider with mock useContext hook", () => {
  useContextMock.mockReturnValue(sampleContextData);
  const element = new ShallowRenderer().render(<Slider />);
  expect(element).toBeTruthy();
  expect(element).toMatchSnapshot();
});

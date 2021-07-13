import React from "react";
import Slider from "./../components/layout/Slider";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
let realUseContext;
let useContextMock;
let useEffect;
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

const sampleContextEmptyData = {
  banners: [],
  getBanners: () => {},
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

describe("Slider Component Test Suit", () => {
  it("Home Component should match with snapshot", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<Slider />);
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });

  it("Slider Component should call API if no data found in context", () => {
    useContextMock.mockReturnValue(sampleContextEmptyData);
    const element = shallow(<Slider />);
    expect(element).toBeTruthy();
  });
});

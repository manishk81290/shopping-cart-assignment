import React from "react";
import ProductItem from "./../components/products/ProductItem";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
let realUseContext;
let useContextMock;
const sampleContextData = {
  cart: [
    {
      name: "Sandwich Bread - White, Chemical Free, 400 gm",
      imageURL: "/static/images/products/bakery-cakes-dairy/bread.jpg",
      description:
        "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.",
      price: 32,
      stock: 50,
      category: "5b6899123d1a866534f516de",
      sku: "bcd-bread-400",
      id: "5b6c6d3201a7c38429530888",
      count: 2,
    },
  ],
  updateCart: () => {},
};

const sampleContextDiffData = {
  cart: [
    {
      name: "Epigamia Greek Yogurt - Blueberry, 90 gm Cup",
      imageURL: "/static/images/products/bakery-cakes-dairy/yogurt-blue.jpg",
      description:
        "Epigama means in Ancient Greek meant a way to Formalize the relationship between different nations. Epigamia greek yogurt is one of the most authentic yoghurts which advocates a healthy lifestyle with delicious taste. An excellent source of protein without the added fat.",
      price: 40,
      stock: 50,
      category: "5b6899123d1a866534f516de",
      sku: "bcd-yogurt-blue",
      id: "5b6c6d9e01a7c3842953088a",
      count: 4,
    },
  ],
  updateCart: () => {},
};

const testProps = {
  item: {
    name: "Tata Tea Gold Leaf Tea, 500 gm",
    imageURL: "/static/images/products/beverages/tata-tea.jpg",
    description:
      "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
    price: 165,
    stock: 50,
    category: "5b675e5e5936635728f9fc30",
    sku: "bev-tata-tea-500",
    id: "5b6c6f4a01a7c3842953088c",
  },
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

// it("ProductItem with mock useContext hook", () => {
//   useContextMock.mockReturnValue(sampleContextData);
//   const element = new ShallowRenderer().render(<ProductItem {...testProps} />);
//   expect(element).toBeTruthy();
//   expect(element).toMatchSnapshot();
// });

describe("ProductItem Component Test cases", () => {
  it("ProductItem should render and match with snapshot", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<ProductItem item={testProps.item} />);
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
  it("Buy now Button click if the same product is already exists in the cart", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<ProductItem item={testProps.item} />);
    const buyNowBtn = element.find(".buynow");
    buyNowBtn.simulate("click");
  });
  it("Buy now Button click if the same product is not exists in the cart", () => {
    useContextMock.mockReturnValue(sampleContextDiffData);
    const element = shallow(<ProductItem item={testProps.item} />);
    const buyNowButton = element.find(".buynow");
    buyNowButton.simulate("click");
  });
});

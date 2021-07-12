import axios from "axios";
import { get, post } from "./../services/api";
import { BANNER_URL, CART_URL } from "./../services/config";

jest.mock("axios");

describe("API test cases", () => {
  it("GET method test", () => {
    const banner = [
      {
        bannerImageUrl: "/static/images/offers/offer4.jpg",
        bannerImageAlt: "Independence Day Deal - Rs99 off on bodywash",
        isActive: true,
        order: 4,
        id: "5b6c38576cb7d770b7010ccf",
      },
    ];
    const resp = { data: banner };
    axios.get.mockResolvedValue(resp);
    return get(BANNER_URL).then((data) =>
      expect(data).toEqual({ data: banner })
    );
  });
  it("POST method test", () => {
    const cart = [
      {
        name: "Organic Fresh Paneer, 200 gm ",
        imageURL: "/static/images/products/bakery-cakes-dairy/paneer.jpg",
        description:
          "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we deFresho Organic Milk is sourced from farms that have been certified organic for over 8 years. All feed is naturally grown with no pesticides or fertilizers.",
        price: 98,
        stock: 50,
        category: "5b6899123d1a866534f516de",
        sku: "bcd-paneer-200",
        id: "5b6c6d6201a7c38429530889",
        count: 2,
      },
    ];
    const resp = { data: cart };
    axios.post.mockResolvedValue(resp);
    return post(CART_URL, {}).then((data) =>
      expect(data).toEqual({ data: cart })
    );
  });
});

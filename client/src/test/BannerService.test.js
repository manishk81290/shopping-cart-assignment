import BannerService from "./../services/BannerService";

it("Banner Service function should be truthy", () => {
  expect(BannerService.getBanners()).toBeTruthy();
});

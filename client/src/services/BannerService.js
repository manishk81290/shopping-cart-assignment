import { BANNER_URL } from "./config";
import { get } from "./api";

const BannerService = {
  getBanners: async () => {
    try {
      return get(BANNER_URL);
    } catch (error) {
      console.log(error);
    }
  },
};

export default BannerService;

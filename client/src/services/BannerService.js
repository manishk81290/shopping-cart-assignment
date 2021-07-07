import axios from "axios";
import { GETBANNERURL } from "./config";

const BannerService = {
  getBanners: async () => {
    try {
      let response = [];
      await axios.get(GETBANNERURL).then((res) => {
        response = res.data;
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getBannerById: async (bannerId) => {
    try {
      const response = await axios.get(GETBANNERURL);
      console.log(response.data.filter((cat) => cat.id === bannerId));
    } catch (error) {
      console.log(error);
    }
  },
};

export default BannerService;

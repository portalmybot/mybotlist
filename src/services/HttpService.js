import axios from "axios"
import CookieService from "./CookieService";

class HttpService {
  async get(url) {
    const at = CookieService.get("access_token");
    const options = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + at,
      },
    };

    try {
      return await axios.get(url, options);
    } catch (error) {
      console.error("No se pudo optener datos", error);
    }
    
  }

  async post(url, data, options = null) {
    const at = CookieService.get("access_token");
    const postOptions = {
       headers: {
         Accept: "application/json",
         Authorization: "Bearer " + at,
       },
    };
    const finalOptions = Object.assign(postOptions, options);

    try {
      return await axios.post(url, data, finalOptions);
    } catch (error) {
      console.error("No se pudo optener datos", error);
      return error.response !== undefined ? error.response : error;
    }
  }
}

export default new HttpService();
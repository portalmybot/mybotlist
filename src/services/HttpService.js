import axios from "axios"
import CookieService from "./CookieService";

const at = CookieService.get("access_token");

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_APP,
  headers: {
    "Accept": "application/json",
    "Authorization": "Bearer " + at,
  }
})

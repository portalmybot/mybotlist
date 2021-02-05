import axios from "axios";
import authHeader from "./auth-header";
import API_URL from "./api-url";

const getUserProfile = () => {
  return axios.get(API_URL + "user", {
    headers: authHeader()
  });
};

export default {
  getUserProfile,
};
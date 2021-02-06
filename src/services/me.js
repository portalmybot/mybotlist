import axios from "axios";
import authHeader from "./auth-header";
import urlApi from "./api-url";

const getUserProfile = () => {
  return axios.post(urlApi() + 'details', {},
  {
    headers: authHeader(),
  });
};

export default getUserProfile;

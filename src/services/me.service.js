import axios from "axios";
import authHeader from "./auth-header";

const getUserProfile = () => {
  return axios.post('details', {},
  {
    headers: authHeader(),
  });
};

export default getUserProfile;

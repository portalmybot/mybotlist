import axios from "axios";
import authHeader from "./auth-header";

const getUserProfile = () => {
  return axios.post('http://127.0.0.1:8000/api/v1/details', {}, 
  {
    headers: authHeader(),
  });
};

export default getUserProfile;
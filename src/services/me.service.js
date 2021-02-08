import axios from "axios";

const getUserProfile = () => {
  return axios.get('user');
};

export default getUserProfile;

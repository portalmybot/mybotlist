import HttpService from "./HttpService";
const getUserProfile = async () => {
//http://127.0.0.1:8000/api/v1/
  const response = await HttpService.get("http://127.0.0.1:8000/api/v1/user");
  return response.data;
};

export default getUserProfile;

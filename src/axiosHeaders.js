import axios from "axios";
const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);

const axiosHeaders = () => {
  axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';
  axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
  axios.defaults.headers.common['Accept'] = `application/json`;

}

export default axiosHeaders

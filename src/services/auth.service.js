import axios from "axios";
import API_URL from "./api-url";

const login = (email, passport) => {
  return axios
    .post(API_URL + "login", {
      email,
      passport,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("iduser_discord");
};

const getIdUser = () => {
  return JSON.parse(localStorage.getItem("iduser_discord"));
};

export default {
  login,
  logout,
  getIdUser,
};
import axios from "axios";

const login = (email, passport) => {
  return axios
    .post("login", {
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

import http from "./HttpService";

export const getUser = async () => {
  const { data } = await http.get("/user");
  return data[0];

};


export const logoutUser = async () => {
  const resp = await http.get("/logout");
  return resp;

};


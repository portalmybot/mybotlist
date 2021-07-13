
import http from "./HttpService";

export const getUser = async () => {
  const { data } = await http.get("/user");
  return data[0];

};
export const getUserPremium = async () => {
  const { data } = await http.get("user/premium");
  return data;

};
export const addUserPremium = async () => {
  const userLogin = await getUser();
  const postData = {
    id_user: userLogin.social_id,
    expired: new Date().toISOString(),
  }

  await http.post("user/premium/add", postData);

};

export const logoutUser = async () => {
  const resp = await http.get("/logout");
  return resp;

};


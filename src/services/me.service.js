import http from "./HttpService";
import { sendWebHook } from "./WebHookService";

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
  }
  await http.post("user/premium/add", postData);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `USER PREMIUM: ${userLogin.social_id}`, 15277667)
  
};
export const addUserPremiumPerm = async () => {
  const userLogin = await getUser();
  const postData = {
    id_user: userLogin.social_id,
    status_premium: 1
  }
  await http.post("user/premium/add", postData);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `USER PREMIUM +: ${userLogin.social_id}`, 15277667)
};

export const logoutUser = async () => {
  const resp = await http.get("/logout");
  return resp;

};


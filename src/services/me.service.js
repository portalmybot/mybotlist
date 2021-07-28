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
export const addUserPremium = async (data) => {
  const userLogin = await getUser();
  const postData = {
    order_id: data.orderID,
    id_user: userLogin.social_id,
  }
  await http.post("user/orders/add", postData);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `ORDEN USER PREMIUM: ${userLogin.social_id}`, 15277667)
  
};
export const addUserPremiumPerm = async (data) => {
  const userLogin = await getUser();
  const postData = {
    order_id: data.orderID,
    id_user: userLogin.social_id,
    order_status: 1
  }
  await http.post("user/orders/add", postData);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `ORDEN USER PREMIUM +: ${userLogin.social_id}`, 15277667)
};

export const logoutUser = async () => {
  const resp = await http.get("/logout");
  return resp;

};


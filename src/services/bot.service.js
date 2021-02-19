import http from "./HttpService";
import MeService from './me.service';

export const getHomeBots = async () => {
  const response = await http.get("/home/bots");
  return response;

};

export const addBot = async ({ data }) => {
  const userLogin = await MeService()

  const postData = {
    id_bot: data.id_bot,
    idUser_bot: userLogin.user.user_id,
    prefix_bot: data.prefix_bot,
    shortDesc_bot: data.shortDesc_bot,
    invite_bot: data.invite_bot ? data.invite_bot : null,
    note_bot: data.note_bot ? data.note_bot : null,

  }
  console.log(postData);
  console.log('user_id', userLogin.user.user_id);
  await http.post("/bots", postData);

};
export const addTags = async (data) => {
  console.log(data);
 /* await http.post("/bots", data);
 */
};


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
  await http.post("/bots", postData);

};
export const getTags = async () => {
  const response = await http.get("/tags");
  return response.data;
};
export const getTagsHome = async () => {
  const response = await http.get("/home/tags");
  return response.data;
};

export const addTags = async (data) => {
  const id_bot = data.id_bot;
  data.tags.map(async (tag) => {
    const postData = {
      id_bot: id_bot,
      name_tag: tag,
    }

    await http.post("/bots/add/tag", postData);
  })

};


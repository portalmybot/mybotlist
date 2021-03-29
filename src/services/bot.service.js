import http from "./HttpService";
import { getUser } from './me.service';

export const getHomeBots = async () => {
  const response = await http.get("/home/bots");
  return response.data;

};
export const getBot = async (id) => {
  const { data } = await http.get(`/home/bot/${id.queryKey[1].id}`);

  return data[0];
  
};
export const botExists = async (id) => {
  const { data } = await http.get(`/bots/exists/${id}`);
  return data.result;
  
};

export const addBot = async ({ data }) => {
  const userLogin = await getUser();

  const postData = {
    id_bot: data.id_bot,
    idUser_bot: userLogin.user_id,
    prefix_bot: data.prefix_bot,
    shortDesc_bot: data.shortDesc_bot,
    customUrl_bot: data.id_Bot,
    invite_bot: data.invite_bot ? data.invite_bot : null,
    note_bot: data.note_bot ? data.note_bot : null,
    
  }
  console.log(postData);
  await http.post("/bots", postData);
  
};
export const updateBot = async ({ data }) => {
  
  await http.put(`/bots/${data.id_bot}`, data);
  window.location.href = "http://localhost:3000/me";

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


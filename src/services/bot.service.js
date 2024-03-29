import http from "./HttpService";
import { getUser, getUserPremium } from './me.service';
import { sendWebHook } from "./WebHookService";

export const getHomeBots = async () => {
  const response = await http.get("/home/bots");
  return response.data;

};

export const getHomeSearchBots = async () => {
  const response = await http.get("/home/bots/search");
  return response.data;

};
export const getHomeBotsVoteTop = async () => {
  const response = await http.get("/home/bots/vote");
  return response.data;

};
export const getHomeBotsVerified = async () => {
  const response = await http.get("/home/bots/verified");
  return response.data;

};
export const getHomeBotsPremium = async () => {
  const response = await http.get("/home/bots/premium");
  return response.data;

};
export const getHomeBotsNews = async () => {
  const response = await http.get("/home/bots/news");
  return response.data;

};

export const getListTopBots = async () => {
  const response = await http.get("/list/top");
  return response.data;

};
export const getListVerifiedBots = async () => {
  const response = await http.get("/list/verified");
  return response.data;

};
export const getListPremiumBots = async () => {
  const response = await http.get("/list/premium");
  return response.data;

};
export const getListNewBots = async () => {
  const response = await http.get("/list/new");
  return response.data;

};

export const getHomeTagBots = async (name) => {
  const response = await http.get(`/home/tag/${name.queryKey[1].name}`);
  return response;

};
export const getBackgroundBot = async (id) => {
  const { data } = await http.get(`/home/bots/bg/${id.queryKey[1].id}`);
  return data[0];

};

export const getBot = async (id) => {
  const { data } = await http.get(`/home/bot/${id.queryKey[1].id}`);
  if(data[0].status_bot === 0) return false
  
  return data[0];
  
};
export const getBotEdit = async (id) => {
  const userLogin = await getUser();
  const { data } = await http.get(`/home/bot/${id.queryKey[1].id}`);
  if (userLogin.user_id != data[0].idUser_bot) return false
  if(data[0].status_bot === 0) return false
  
  return data[0];
  
};
export const getVoteBot = async (id) => {
  const { data } = await http.get(`/user/vote/${id.queryKey[1].id}`);
  return data;
  
};
export const botExists = async (id) => {
  const { data } = await http.get(`/bots/exists/${id}`);
  return data.result;
  
};

export const addBot = async ({ data }) => {
  const userLogin = await getUser();
  const premium = await getUserPremium();

  const postData = {
    id_bot: data.id_bot,
    idUser_bot: userLogin.user_id,
    prefix_bot: data.prefix_bot,
    shortDesc_bot: data.shortDesc_bot,
    customUrl_bot: data.id_Bot,
    invite_bot: data.invite_bot ? data.invite_bot : `https://discord.com/oauth2/authorize?client_id=${data.id_bot}&permissions=0&scope=bot`,
    note_bot: data.note_bot ? data.note_bot : null,
    premium_bot: premium.result ? 1 : 0,
  }
  const postBG = {
    id_bot: data.id_bot

  }
  
  if (premium.result) {
    const postBadge = {
      id_bot: data.id_bot,
      name_badge: 'premium'
    }
    await http.post("/bots/add/badge", postBadge);
  }

  await http.post("/bots", postData);
  await http.post("/bots/bg/add", postBG);
  
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `NUEVO BOT AGREGADO: [${data.id_bot}](https://portalmybot.com/list/bot/${data.id_bot})`, 3066993)
  
};

export const addDevs = async (data) => {
  const id_bot = data.id_bot;
  data.datadevs.map(async (dev) => {
    const postData = {
      id_bot: id_bot,
      idUser_bot: dev.trim(),
    }
    
    await http.post("/bots/add/dev", postData);
  })
}
export const deleteDevsBot = async ({ data }) => {
  await http.delete(`/bots/delete/devs/${data.id_bot}`);

}

export const updateBot = async (data) => {

  let dataObj = data.data;
  dataObj["longDesc_bot"] = data.longDesc_bot ? data.longDesc_bot : null

  await http.put(`/bots/${dataObj.id_bot}`, dataObj);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `BOT EDITADO: <@${dataObj.id_bot}> [${dataObj.id_bot}](https://portalmybot.com/list/bot/${dataObj.id_bot})`, 3066993)
  window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;
  
};
export const addBadgesBot = async (data) => {
  const postBadge = {
    id_bot: data.id_bot,
    name_badge: 'premium'
  }

  await http.post("/bots/add/badge", postBadge);
  await http.put(`/bots/${data.id_bot}`, { premium_bot: 1 });
  
};

export const updateBotBackground = async (data) => {
  let dataBG = data.databg;
  await http.put(`/bots/bg/update/${data.id_bot}`, dataBG);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `BOT EDITADO (FONDOS): <@${data.id_bot}> [${data.id_bot}](https://portalmybot.com/list/bot/${data.id_bot})`, 3447003)
};

export const getTags = async () => {
  const response = await http.get("/tags");
  return response.data;

};
export const getTagsHome = async () => {
  const response = await http.get("/home/tags");
  return response.data;

};

export const deleteBot = async (data) => {
  const id_bot = data.id_bot;
 
  await http.delete(`/bots/${id_bot}`);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `BOT ELIMINADO: <@${data.id_bot}> [${data.id_bot}](https://portalmybot.com/list/bot/${data.id_bot})`, 3426654)
  window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;

}

export const addVote = async (data) => {
  const id_bot = data.id_bot;
  const userLogin = await getUser();

  const postData = {
    id_bot: id_bot,
    idUser_bot: userLogin.social_id,
  }

  await http.post(`/bots/vote/${id_bot}`);
  await http.post("/bots/add/vote", postData);
  sendWebHook(process.env.REACT_APP_DISCORD_WEBHOOK, 'MyBOT List', `REP. AGREGADO: <@${data.id_bot}> [${data.id_bot}](https://portalmybot.com/list/bot/${data.id_bot})`, 15844367)
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


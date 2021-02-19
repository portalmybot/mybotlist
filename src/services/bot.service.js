import http from "./HttpService";

export const getHomeBots = async () => {
  const response = await http.get("/home/bots");
  return response;

};
export const addBot = async ({ data }) => {
  
  const postData = {
    id_bot: data.id_bot,
    idUser_bot: data.idUser_bot ? data.idUser_bot : '12356',
    prefix_bot: data.prefix_bot,
    shortDesc_bot: data.shortDesc_bot,
    invite_bot: data.invite_bot ? data.invite_bot : null,
    note_bot: data.note_bot ? data.note_bot : null,

  }
  console.log(postData);
  await http.post("/bots", postData);

};
export const addTags = async (data) => {
  console.log(data);
 /* await http.post("/bots", data);
 */
};


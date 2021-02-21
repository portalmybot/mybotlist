import http from "./HttpService";

export const getTagsBot = async (id_bot) => {
  const response = await http.get("/home/tagbots/"+id_bot);
  console.log(response);
  return response;

};
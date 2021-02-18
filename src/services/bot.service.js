import http from "./HttpService";

const getAllBot = async () => {
  const response = await http.get("/home/bots");
  return response;

};
const addBot = async ({ data }) => {
  console.log(data);
 /* await http.post("/bots", data);
 */
};

export default {
  getAllBot,
  addBot
};

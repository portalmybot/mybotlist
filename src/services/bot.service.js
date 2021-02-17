import http from "./HttpService";

const getAllBot = async () => {
  const response = await http.get("/home/bots");
  return response;

};

export default getAllBot;

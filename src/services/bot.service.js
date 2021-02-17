import http from "./HttpService";

const getAllBot = async () => {
  const response = await http.get("/bots/home");
  return response;

};

export default getAllBot;

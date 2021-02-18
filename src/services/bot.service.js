import http from "./HttpService";

export const getHomeBots = async () => {
  const response = await http.get("/home/bots");
  return response;

};
export const addBot = async ({
      data
    }) => {
  console.log(data);
 /* await http.post("/bots", data);
 */
};



import http from "./HttpService";

export const getUser = async () => {
  const { data } = await http.get("/user");
  return data;

};


import axios from "axios"

const config = {
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
  }
}

export const sendWebHook = async (url, username, content) => {
  const res = await axios.post(url, {
    username: username,
    content: content
  }, config);

  console.log(res);
}

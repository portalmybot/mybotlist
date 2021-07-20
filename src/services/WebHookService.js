import axios from "axios"

const config = {
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
  }
}

export const sendWebHook = async (url, username, text, color) => {
  await axios.post(url, {
    username: username,
    embeds: [{
      "description": text,
      "color": color
    }]
  }, config);

}

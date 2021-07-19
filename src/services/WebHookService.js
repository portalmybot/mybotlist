import axios from "axios"

const config = {
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
  }
}

export const sendWebHook = async (url, username, data, premium, userid) => {
  await axios.post(url, {
    username: username,
    embeds: [{
      "title": "NUEVO BOT AGREGADO",
      "description": `${data.shortDesc_bot}${data.note_bot ? '\n**NOTA:** '+data.note_bot : ''}`,
      "fields": [
        {
          "name": "ID",
          "value": `${data.id_bot}`,
          "inline": true
        },
        {
          "name": "Prefix",
          "value": `${data.prefix_bot}`,
           "inline": true
        },
        {
          "name": "Premium",
          "value": `${premium ? 'Si' : 'No'}`,
          "inline": true
        },
        {
          "name": "User",
          "value": `<@${userid}>`,
          "inline": true
        },
        {
          "name": "Enlace",
          "value": `[Enlace de Invitación](https://discord.com/oauth2/authorize?client_id=${data.id_bot}&permissions=0&scope=bot)`,
          "inline": true
        },
      ],
      "color": 4631003,
      "footer": {
        "text": "MyBOT List",
        "icon_url": "https://i.imgur.com/DC0Kp0D.png"
      }
    }]
  }, config);

}

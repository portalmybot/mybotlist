import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import { useQuery } from 'react-query'
import { useParams } from "react-router-dom";
import { getBot } from '../services/bot.service';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import AvatarBot from "../components/bot/AvatarBot";
import InfoBot from "../components/bot/InfoBot";
import ActionBot from "../components/bot/ActionBot";
import DevsBot from "../components/bot/DevsBot";


let marked = require("marked");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    padding: theme.spacing(4, 0),
  },
  action: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  devsContent: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
  descriptionContent: {
    marginTop: theme.spacing(1),
    '& img': {
      maxWidth: '90%',
      borderRadius: '5px',
    },
    '& a': {
      color: '#7289da',
    },
    '& pre': {
      padding: theme.spacing(1),
      borderRadius: '5px',
      backgroundColor: '#2c2c2c',
      fontSize: '15px',
    }
  },
}))

var outputStyle = {
  backgroundColor: "#252525",
  border: '1px solid #33343b',
  padding: "10px 20px",
};
/* const devTest = ['CraterMaik', 'Maik'];
 */
//https://i.imgur.com/94Mqbdi.jpeg
const testContentDescription = `# Introducción 
¡Adelante, juega con el editor! Asegúrate de revisar el estilo **negrita** y *cursiva*, o incluso los enlaces [portalmybot](https://portalmybot.com).

## Listados
Las listas ordenadas se pueden iniciar escribiendo \`1\`.
Las listas desordenadas se pueden iniciar usando la barra de herramientas o escribiendo \`*\`, \`-\` o \`+\`. 

#### Desordenado
* Las listas son pan comido
* Incluso continúan automáticamente a medida que escribe
* Una doble entrada los terminará
* Las pestañas y las pestañas de turno también funcionan

#### Ordenado
1. Listas numeradas...
2. ...¡trabaja también!

---

## ¿Y las imágenes?
![link]()


## Texto citado
> Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis tempora doloremque excepturi nobis mollitia neque dicta.Eveniet maxime architecto molestiae, quos tenetur, veniam, repellendus unde debitis porro fugit consectetur quam!

## Bloque de código
\`\`\`
client.on('message', (message) => {
 if (message.content.startsWith('ping')) {
  message.channel.send('pong 🏓!!');
 }
});
\`\`\`
`;


export default function Bot() {
  const { id } = useParams();
  const { isLoading, data: bot = {}, error} = useQuery(
    [
      'getbot',
      {
        id: id
      }
    ], getBot
  );
  

  const classes = useStyles();
  
  return (
    <Layout>
      {
        isLoading ? (
           'Cargando...'
        ) : error ? (
          <h1>Error!</h1>
        ) : (
            
        <Container maxWidth={false} className={classes.containerbg} style={{background: 'linear-gradient(to right, rgba(34, 36, 38, 0.68), rgba(34, 36, 38, 0.68)), url(https://i.imgur.com/94Mqbdi.jpeg) center top / cover no-repeat fixed'}} >
          <Container maxWidth={'lg'}>

            <div className={classes.root}>
              <Grid container spacing={1} justify='center'>
                <Grid item xs={12} sm={6}>
                  <Box display="flex">
                    <Box m="auto">
                      <AvatarBot bot={bot} />
                    </Box>
                  </Box>
                  <Box className={classes.action}>
                    <ActionBot bot={bot} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <InfoBot bot={bot} />
                </Grid>
                
                <Grid item xs={12}>
                  <Divider style={{ marginBottom: 20, marginTop: 30 }}/>
                  <Box className={classes.devsContent}>
                    Desarrollado por:
                    <Box>
                       <DevsBot user={bot.user_bot} />
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Divider style={{ marginBottom: 20 }}/>
                  <Box className={classes.descriptionContent}>
                    <div
                        style={outputStyle}
                        dangerouslySetInnerHTML={{
                          __html: marked(testContentDescription),
                        }}
                      ></div>
                  </Box>
                </Grid>
              </Grid>
            </div>
          
          </Container>

        </Container>

        )
      }
    </Layout>
  );
}
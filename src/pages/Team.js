import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Seo from '../components/common/Seo';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ImageIcon from '@material-ui/icons/Image';
import { amber, green, pink } from '@material-ui/core/colors';

import CardListStyle from '../components/common/CardListStyle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  title: {
    fontWeight: 700,
    marginTop: theme.spacing(1),
    
  },
  heroContent: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  liContent: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    marginBottom: theme.spacing(1),
  },
  appBar: {
    position: 'relative',
  },
  titleDialog: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  titleUsers: {
    padding: theme.spacing(4, 0, 2)
  }

}));

const userList = [
  {
    username: 'CraterMaik',
    avatar: 'https://i.imgur.com/DC0Kp0D.png',
    main: true,
    color: '#673ab7',
    data: {
      rol: 'CEO, Admin',
      social: {
        twitter: 'https://twitter.com/cratermaik',
        github: 'https://github.com/cratermaik',
        web: 'https://portalmybot.com'
      }
    }
  },
  {
    username: 'Jenny',
    avatar: 'https://i.imgur.com/lVnRZEB.gif',
    main: true,
    color: '#673ab7',
    data: {
      rol: 'Bot Dev, Admin',
      social: {
        twitter: 'https://twitter.com/jtas15',
        github: 'https://github.com/JennyTS',
        web: 'https://portalmybot.com/u/jenny'
      }
    }
  },
  {
    username: 'Hyuuh',
    avatar: 'https://i.imgur.com/2K1mTgh.gif',
    main: true,
    color: '#673ab7',
    data: {
      rol: 'Admin',
      social: {
        twitter: 'https://twitter.com/LilHyuuh',
        github: 'https://github.com/Hyuuh',
        web: 'https://mybo.me/axel'
      }
    }
  },
  {
    username: 'ManU',
    avatar: 'https://i.imgur.com/5kznHIK.gif',
    main: true,
    color: '#673ab7',
    data: {
      rol: 'Admin',
      social: {
        twitter: '#',
        github: 'https://github.com/manu522',
        web: 'https://mybo.me/manu'
      }
    }
  },
  {
    username: 'Abiiee',
    avatar: 'https://i.imgur.com/cKIKBxg.gif',
    main: false,
    color: '#fb395d',
    data: {
      rol: 'Gestor Head',
      social: {
        twitter: 'https://twitter.com/Abiiee__',
        github: 'https://github.com/Abiiee',
        web: 'https://abiiee.netlify.app/'
      }
    }
  },
  {
    username: 'K3VITOX',
    avatar: 'https://imgur.com/W1uo9HE.png',
    main: false,
    color: '#fb395d',
    data: {
      rol: 'Gestor',
      social: {
        twitter: 'https://twitter.com/ToxVi?s=09',
        github: 'https://github.com/K3VITOX',
        web: 'https://wall-e-web.affaibli.xyz/'
      }
    }
  },
  {
    username: 'SirNice',
    avatar: 'https://i.imgur.com/whpTnx9.png',
    main: false,
    color: '#fb395d',
    data: {
      rol: 'Gestor',
      social: {
        twitter: 'https://twitter.com/M1chaelLiendo',
        github: 'https://github.com/SirNice',
        web: 'https://www.youtube.com/channel/UCpvDw1oFFfI2DkU0A0XCdYw'
      }
    }
  },
  {
    username: 'CrisKop',
    avatar: 'https://i.imgur.com/nAHzkpx.png',
    main: false,
    color: '#fb395d',
    data: {
      rol: 'Gestor',
      social: {
        twitter: '#',
        github: '#',
        web: 'https://www.youtube.com/channel/UC_s--WhZeBuWpld8V_TqUDA'
      }
    }
  },
  {
    username: 'ExpErgio',
    avatar: 'https://i.imgur.com/bZoj9vI.png',
    main: false,
    color: '#FFB300',
    data: {
      rol: 'Premium',
      social: {
        twitter: 'https://twitter.com/Excelsior_DS',
        github: '#',
        web: 'https://www.youtube.com/channel/UCPasiIXZKSPjBHYs6ifZuFg'
      }
    }
  },
  {
    username: 'Batman',
    avatar: 'https://i.imgur.com/cluASyM.png',
    main: false,
    color: '#FFB300',
    data: {
      rol: 'Premium',
      social: {
        twitter: 'https://twitter.com/__MrAsshole__',
        github: '#',
        web: 'https://steamcommunity.com/profiles/76561198330944594'
      }
    }
  },
  {
    username: 'MendozaX',
    avatar: 'https://i.imgur.com/kxFrA33.png',
    main: false,
    color: '#FFB300',
    data: {
      rol: 'Premium',
      social: {
        twitter: 'https://twitter.com/mendozax_',
        github: 'https://www.reddit.com/u/mendozaax',
        web: 'https://steamcommunity.com/profiles/76561198330944594'
      }
    }
  },
]
const TeamPage = () => {

  const classes = useStyles();
  return (
      <Layout>
        {
            <>
              <Seo 
                title='Team —  MyBOT List'
                description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'
                url='https://portalmybot.com/list/'
                image='https://i.imgur.com/DC0Kp0D.png' />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>

                        <Container maxWidth="lg" component="main" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            Team MyBOT List
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            Información sobre MyBOT List y los increíbles gestores y contribuidores que hacen posible la plataforma.
                            
                          </Typography>
                        </Container>

                        <Container maxWidth="md" component="main">
                          <Typography variant="h4" color="textPrimary" component="h2" className={classes.titleUsers}>
                            Introducción
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary" component="p">
                            MyBOT List es una lista de Bots publicos de Discord en español, donde podra encontrar el bot adecuado para su servidor, tambien puede registrar su bot usted mismo y personalizarlo para una mejor visibilidad.
                          </Typography>
                          <Typography variant="h4" color="textPrimary" component="h2" className={classes.titleUsers}>
                            Característica
                          </Typography>
                          <Grid container className={classes.root} spacing={2}>
                            <Grid item xs={12}>
                              <Grid container justifyContent="center" spacing={2}>

                                <Grid key={'carac-1'} xs={4} item>
                                  <EmojiEventsIcon style={{ fontSize: 40, color: amber[600] }} />
                                  <Typography variant="subtitle1" color="textPrimary" component="p">
                                    Sistema de reputaciones
                                  </Typography>
                                  <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Un sistema de reputaciones para recompensar a los bots útiles, y tendran la opciones de
                                    destacar en las primeras listas.
                                  </Typography>
                                </Grid>
                                <Grid key={'carac-2'} xs={4} item>
                                  <ImageIcon style={{ fontSize: 40, color: pink['A400'] }} />
                                  <Typography variant="subtitle1" color="textPrimary" component="p">
                                    Fondos personalizados
                                  </Typography>
                                  <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Puedes personalizar y darle estilo a tus Bots con fondos animados.
                                  </Typography>
                                </Grid>
                                <Grid key={'carac-2'} xs={4} item>
                                  <VerifiedUserIcon style={{ fontSize: 40, color: green['A400'] }} />
                                  <Typography variant="subtitle1" color="textPrimary" component="p">
                                    Sistema de verificación
                                  </Typography>
                                  <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Proporcionamos a los usuarios bots de confianza mediante nuestro sistema de verificación,
                                    administrado por gestores de la comunidad MyBOT Team.
                                  </Typography>
                                </Grid>
                                
                              </Grid>
                            </Grid>
                          </Grid>
                          <Typography variant="h4" color="textPrimary" component="h2" className={classes.titleUsers}>
                            Conoce al equipo
                          </Typography>
                          <Grid container spacing={2}>

                            {userList.filter((u) => !u.data.rol.includes('Premium')).map((user) => {

                              const cardId = `card-id-${user.username}`;
                              return (
                                <Grid item lg={3} xs={6} >
                                 <CardListStyle user={user} id_key={cardId} />
                                </Grid>
                              );
                              
                            })}

                          </Grid>
                          <Typography variant="h4" color="textPrimary" component="h2" className={classes.titleUsers}>
                            Contribuidores
                          </Typography>
                          <Grid container spacing={2}>

                            {userList.filter((u) => u.data.rol.includes('Premium')).map((user) => {

                              const cardId = `card-id-${user.username}`;
                              return (
                                <Grid item lg={3} xs={6} >
                                 <CardListStyle user={user} id_key={cardId} />
                                </Grid>
                              );
                              
                            })}
                          </Grid>
                        </Container>
                      </Grid>
                  </div>
                 
              </Container>
            </>
          
        }
      </Layout>
  )
};

export default TeamPage;



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

const CertifiedPage = () => {

  const classes = useStyles();
  return (
      <Layout>
        {
            <>
              <Seo 
                title='Certificado — MyBOT List'
                description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'
                url='https://portalmybot.com/list/'
                image='https://i.imgur.com/DC0Kp0D.png' />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>

                        <Container maxWidth="lg" component="main" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            Certificado MyBOT List
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            Los bots de confianza en la lista coreana de Discordbot son un esquema para dar fiabilidad sobre una base más detallada que la certificación de discordia.
                            Son bots de confianza certificados por MyBOT Team!
                            
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
                          
                        </Container>
                      </Grid>
                  </div>
                 
              </Container>
            </>
          
        }
      </Layout>
  )
};

export default CertifiedPage;



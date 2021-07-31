import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Seo from '../components/common/Seo';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { amber, green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';

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
                            Los bots certificados en MyBOT List es un esquema para dar fiabilidad y confianza a los usuarios y servidores en Discord por MyBOT Team!
                          </Typography>
                          
                        </Container>
                        <Container maxWidth="lg" component="section" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            Aplicar Ahora
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            <div>
                              <Button variant="contained" size="large" color="primary" className={classes.margin}>
                                Enviar Solicitud
                              </Button>
                            </div>
                          </Typography>
                          
                        </Container>

                        <Container maxWidth="md" component="section">
                          
                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Para demostrar que es un bot de confianza, debe cumplir todos los siguientes criterios:
                          </Typography>
                          <Grid container className={classes.root} spacing={2}>
                            <List component="nav" className={classes.root} aria-label="contacts">
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Más de 1000 servidores" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Bots certificados por Discord" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Más del 90 por ciento de tiempo de actividad en promedio" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Almacenamiento seguro y confiable" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Debe existir un contenido principal representativo" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Debe existir un contenido principal representativo" />
                              </ListItem>
                            </List>
                          </Grid>
                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Beneficios:
                          </Typography>
                          <Grid container className={classes.root} spacing={2}>
                            <List component="nav" className={classes.root} aria-label="contacts">

                              <ListItem button>
                                <ListItemIcon>
                                  <CheckCircleIcon style={{ color: green[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Fondos Personalizados" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <CheckCircleIcon style={{ color: green[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Insignia Bot Certificado" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <CheckCircleIcon style={{ color: green[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Logro MyBOT Especial" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <CheckCircleIcon style={{ color: green[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Posicionamiento de sus Bots" />
                              </ListItem>
                            
                            </List>
                          </Grid>
                        </Container>
                        <Container maxWidth="lg" component="section" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            Aplicar Ahora
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            <div>
                              <Button variant="contained" size="large" color="primary" className={classes.margin}>
                                Enviar Solicitud
                              </Button>
                            </div>
                          </Typography>
                          
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



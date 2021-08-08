import React, { useState, useEffect } from 'react'
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
import { sendCertified } from '../services/me.service';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
  titleUsers: {
    margin: theme.spacing(3, 0, 1)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }

}));


const CertifiedPage = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const timer = React.useRef();

  useEffect(() => {
    clearTimeout(timer.current);
    
  }, []);

  const handleClose = () => {
    setOpen(false);
    setOpenSuccess(false)

  };
  const handleCertified = () => {
    setOpen(!open);
    
    timer.current = window.setTimeout(() => {
      
      setOpenSuccess(!openSuccess)
      
      sendCertified()
    }, 2000);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
                              <Button variant="contained" size="large" color="primary" onClick={handleCertified} className={classes.margin}>
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
                                <ListItemText primary="Más de 500 servidores" />
                              </ListItem>
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Bot certificado por Discord" />
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
                                <ListItemText primary="Almacenamiento seguro y confiable (Hosting/VPS)" />
                              </ListItem>
                              
                              <ListItem button>
                                <ListItemIcon>
                                  <StarIcon style={{ color: amber[500] }} />
                                </ListItemIcon>
                                <ListItemText primary="Debe existir un contenido principal representativo (Modulos de comandos)" />
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
                              <Button variant="contained" size="large" onClick={handleCertified} color="primary" className={classes.margin}>
                                Enviar Solicitud
                              </Button>
                            </div>
                          </Typography>
                          
                        </Container>
                      </Grid>
                      <Backdrop className={classes.backdrop}  open={open}>
                        <CircularProgress color="inherit" />
                      </Backdrop>
                      <Dialog
                        fullScreen={fullScreen}
                        open={openSuccess}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                      >
                        <DialogTitle id="responsive-dialog-title">{"Certificado MyBOT List"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Solicitud de certificado MyBOT List enviado correctamente,<br/>
                            se pondran en contacto con usted via Discord. ¡Gracias por enviar su solicitud!
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="secondary" autoFocus>
                            Listo
                          </Button>
                        </DialogActions>
                      </Dialog>
                  </div>
                 
              </Container>
            </>
          
        }
      </Layout>
  )
};

export default CertifiedPage;



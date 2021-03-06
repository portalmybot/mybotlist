import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import Layout from '../components/Layout';

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { red, yellow, green, lightBlue, orange } from '@material-ui/core/colors';

import Seo from '../components/common/Seo';
import Typography from '@material-ui/core/Typography';


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
  btnGrid: {
    '& > *': {
      margin: theme.spacing(1),
    },
    margin: theme.spacing(0, 'auto'),
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  }

}));


const Premium = () => {
 
  const classes = useStyles();

  const history = useHistory();
  const navigateTo = () => history.push('/me/premium');

  return (
      <Layout>
              <Seo 
                title={'Premium | MyBOT List'}
                description={'Obtener MyBOT List Premium'} 
                url={'https://portalmybot.com/subscribe/'}
                image='https://i.imgur.com/DC0Kp0D.png' />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>
                      
                        <Container maxWidth="lg" component="main" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            MyBOT List Premium
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            ¡Consigue personalizar tus bots de Discord y destacar dentro de la plataforma, no vuelva a ver un anuncio, obtén insignias geniales y muchas cosas mas!
                          </Typography>
                          <Typography variant="subtitle1" align="center" style={{ color: amber[500], fontWeight: 700 }}component="p">
                            Por lanzamiento consigue MyBOT List Premium a precios especiales por poco tiempo y muestra tu apoyo a nuestra comunidad :)
                          </Typography>
                        </Container>

                        <Container maxWidth="md" component="main">
                          <Grid container spacing={1}>

                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <NotInterestedIcon style={{ fontSize: 70, color: red[600] }} />
                                </ListItemAvatar>
                                <ListItemText style={{ fontSize: 20 }} primary="Sin Anuncios" secondary="No volvera a ver anuncios mientra explora en los bots" />
                              </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <AddPhotoAlternateIcon style={{ fontSize: 70, color: green[600] }} />
                                </ListItemAvatar>
                                <ListItemText style={{ fontSize: 20 }} primary="Fondos Personalizados" secondary="Agrege fondos personalizados a sus bots" />
                              </ListItem>
                            </Grid>
                            
                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <EmojiEmotionsIcon style={{ fontSize: 70, color: yellow[600] }} />
                                </ListItemAvatar>
                                <ListItemText style={{ fontSize: 20 }} primary="Insignias Especiales" secondary="Consigue insignias especiales y destaca tus bots" />
                              </ListItem>
                            </Grid>

                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <ColorLensIcon style={{ fontSize: 70, color: lightBlue[600] }} />
                                </ListItemAvatar>
                                <ListItemText style={{ fontSize: 20 }} primary="Roles Discord" secondary="Consigue rol especial en nuestro Discord" />
                              </ListItem>
                            </Grid>

                            <Grid item xs={8}>
                              <ListItem>
                                <ListItemAvatar>
                                  <AddIcon style={{ fontSize: 70, color: orange[600] }} />
                                </ListItemAvatar>
                                <ListItemText style={{ fontSize: 20 }} primary="Más característica..." secondary="Y muchas mas característica especiales" />
                              </ListItem>
                            </Grid>
                            
                            
                            <Grid item xs={12}>
                              <div className={classes.btnGrid}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  size="large"
                                  onClick={navigateTo}
                                  startIcon={<LoyaltyIcon />}
                                >
                                  Obtener MyBOT List Premium
                                </Button>

                              </div>
                            </Grid>
                          </Grid>
                        </Container>
                      </Grid>
                  </div>
                 
              </Container>
  
      </Layout>
  )
};

export default Premium;



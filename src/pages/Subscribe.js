import React from 'react'
import { useQuery } from 'react-query'
import { makeStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { getUser } from '../services/me.service';
import Layout from '../components/Layout';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import LoadingPage from '../components/common/LoadingPage';
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

}));


const Premium = () => {
  const { isLoading, data: user, error } = useQuery('getuser', getUser);
  const classes = useStyles();

  return (
      <Layout>
        {
          isLoading ? (
            <LoadingPage />
          ) : error ? (
            <h1>Error!</h1>
          ) : (
            <>
              <Seo 
                title={'Suscripción | MyBOT List'}
                description={'Perfil del usuario '+ user.social_provider} 
                url={'https://portalmybot.com/subscribe/'}
                icon={user.social_avatarUrl}
                image={user.social_avatarUrl} />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>
                      
                        <Container maxWidth="lg" component="main" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            MyBOT List Premium
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            ¡Consigue personalizar tus bots de Discord y destacar dentro de la plataforma, no vuelva a ver un anuncio y obtener insignias geniales!
                          </Typography>
                          <Typography variant="subtitle1" align="center" style={{ color: amber[500], fontWeight: 700 }}component="p">
                            Por lanzamiento consigue MyBOT List Premium a precios especiales por poco tiempo y muestra tu apoyo a nuestra comunidad :)
                          </Typography>
                        </Container>

                        <Container maxWidth="sm" component="main">
                          <Grid container spacing={1}>

                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <ImageIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                              </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <ImageIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                              </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <ImageIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                              </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar>
                                    <ImageIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                              </ListItem>
                            </Grid>

                          </Grid>
                        </Container>
                      </Grid>
                  </div>
                 
              </Container>
            </>
          )
        }
      </Layout>
  )
};

export default Premium;



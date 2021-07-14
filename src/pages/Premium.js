import React, { forwardRef, useState } from 'react'
import { useQuery } from 'react-query'
import { makeStyles } from '@material-ui/core/styles';
import { green, amber } from '@material-ui/core/colors';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import { getUser } from '../services/me.service';
import Layout from '../components/Layout';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';

import LoadingPage from '../components/common/LoadingPage';
import Seo from '../components/common/Seo';
import PayPayPal from '../components/common/PayPaypal';
import PayPaypalPerm from '../components/common/PayPaypalPerm';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Premium = () => {
  const { isLoading, data: user, error } = useQuery('getuser', getUser);
  const classes = useStyles();
  const [checkout, setCheckout] = useState(false);
  const [checkoutP, setCheckoutP] = useState(false);
  const [open, setOpen] = useState(false);
  const [openP, setOpenP] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setCheckout(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenP = () => {
    setOpenP(true);
    setCheckoutP(true)
  };

  const handleCloseP = () => {
    setOpenP(false);
  };

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
                title={user.social_provider + ' Premium | MyBOT List'}
                description={'Perfil del usuario '+ user.social_provider} 
                url={'https://portalmybot.com/list/'}
                icon={user.social_avatarUrl}
                image={user.social_avatarUrl} />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>
                        <Container maxWidth="sm" component="main" className={classes.heroContent}>
              
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            MyBOT List Premium
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            ¡Consigue personalizar tus bots de Discord y destacar dentro de la plataforma, no vuelva a ver un anuncio y obtén insignias geniales!
                          </Typography>
                          <Typography variant="subtitle1" align="center" style={{ color: amber[500], fontWeight: 700 }}component="p">
                            Por lanzamiento consigue MyBOT List Premium a precios especiales por poco tiempo y muestra tu apoyo a nuestra comunidad :)
                          </Typography>
                        </Container>
                        <Container maxWidth="md" component="main">
                          <Grid container spacing={5} alignItems="flex-end">
                              {/* Card */}
                              <Grid item key={'card-year'} xs={12} sm={6} md={6}>
                                <Card>
                                  <CardHeader
                                    title={'Estándar'}
                                    subheader={'Precio especial'}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={<StarIcon /> }
                                    className={classes.cardHeader}
                                  />
                                  <CardContent>
                                    <div className={classes.cardPricing}>
                                      <Typography component="h2" variant="h3" color="textPrimary">
                                        $5
                                      </Typography>
                                      <Typography variant="h6" color="textSecondary">
                                        /3 meses
                                      </Typography>
                                    </div>
                                    <ul className={classes.liContent}>
                                      
                                      <Typography component="li" variant="subtitle1" align="center" key='li-1'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Fondos Personalizados
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-2'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Posicionamiento de sus Bots
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-3'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Insignia Bot Premium
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-5'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Rol Discord Especial
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-6'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Soporte Prioritario
                                      </Typography>
                                      
                                    </ul>
                                  </CardContent>
                                  <CardActions>
                                    <Button onClick={handleClickOpen} fullWidth variant='contained' color="primary">
                                      Comprar
                                    </Button>
                                  </CardActions>
                                </Card>
                              </Grid>
                            {/* Card End */}
                            {/* Card */}
                              <Grid item key={'card-perm'} xs={12} sm={6} md={6}>
                                <Card>
                                  <CardHeader
                                    title={'Pro'}
                                    subheader={'Precio especial'}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={<StarIcon /> }
                                    className={classes.cardHeader}
                                  />
                                  <CardContent>
                                    <div className={classes.cardPricing}>
                                      <Typography component="h2" variant="h3" color="textPrimary">
                                        $12
                                      </Typography>
                                      <Typography variant="h6" color="textSecondary">
                                        /permanente
                                      </Typography>
                                    </div>
                                    <ul className={classes.liContent}>
                                      
                                      <Typography component="li" variant="subtitle1" align="center" key='li-1'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Fondos Personalizados
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-2'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Posicionamiento de sus Bots
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-3'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Insignias Bot Premium
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-4'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Logro MyBOT Especial
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-5'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Rol Discord Especial
                                      </Typography>
                                      <Typography component="li" variant="subtitle1" align="center" key='li-6'>
                                        <DoneOutlineIcon style={{ color: green[500] }} fontSize="small" /> Soporte Prioritario
                                      </Typography>
                                      
                                    </ul>
                                  </CardContent>
                                  <CardActions>
                                    <Button onClick={handleClickOpenP} fullWidth variant='contained' color="secondary">
                                      Comprar
                                    </Button>
                                  </CardActions>
                                </Card>
                              </Grid>
                            {/* Card End */}
                          </Grid>
                        </Container>
                      </Grid>
                  </div>
                  <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                      <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                          <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.titleDialog}>
                          Pagar por MyBOT List Premium Estándar por 3 meses
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                          Cerrar
                        </Button>
                      </Toolbar>
                    </AppBar>
                    <List>
                      <Container maxWidth={'lg'} className={classes.containerbg}>
                        <Grid item xs={12} sm={12}>
                          <Box display="flex">
                            <Box m="auto">
                             
                              {(checkout === true) ? <PayPayPal /> : null}
                            </Box>
                          </Box>
                        </Grid>
                      </Container>
                    </List>
                  </Dialog>

                  <Dialog fullScreen open={openP} onClose={handleCloseP} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                      <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleCloseP} aria-label="close">
                          <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.titleDialog}>
                          Pagar por MyBOT List Premium Permanente
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleCloseP}>
                          Cerrar
                        </Button>
                      </Toolbar>
                    </AppBar>
                    <List>
                      <Container maxWidth={'lg'} className={classes.containerbg}>
                        <Grid item xs={12} sm={12}>
                          <Box display="flex">
                            <Box m="auto">
                             
                              {(checkoutP === true) ? <PayPaypalPerm /> : null}
                            </Box>
                          </Box>
                        </Grid>
                      </Container>
                    </List>
                  </Dialog>
              </Container>
            </>
          )
        }
      </Layout>
  )
};

export default Premium;



import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://portalmybot.com">
        PortalMyBOT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footerList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),

  },
  footerContainer: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  }
}));

export default function FooterHome() {
  const classes = useStyles();
  
  return (
   <footer className={classes.footer}>

      <Container maxWidth="md" component="footer" className={classes.footerContainer}>
        <Grid container spacing={4} justify="space-evenly">
          
          <Grid item xs={6} sm={3} key={'MyBOT List'}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              MyBOT List
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team.
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} key={'Portal'}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Portal
            </Typography>
            <ul className={classes.footerList}>
              <li key='guias'>
                <Link href="https://portalmybot.com/guias" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Guías
                </Link>
              </li>
              <li key='codes'>
                <Link href="https://portalmybot.com/codes" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Códigos
                </Link>
              </li>
              <li key='tools'>
                <Link href="https://portalmybot.com/tools" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Herramientas
                </Link>
              </li>
              <li key='topuser'>
                <Link href="https://portalmybot.com/leaderboard" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Top Usuarios
                </Link>
              </li>
              
            </ul>
          </Grid>
          
          <Grid item xs={6} sm={3} key={'Comunidad'}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Comunidad
            </Typography>
            <ul className={classes.footerList}>
              <li key='team'>
                <Link href="https://portalmybot.com/mybotlist/team" target="_blank" rel="noopener" variant="subtitle1" color="textSecondary">
                   Team
                </Link>
              </li>
              <li key='github'>
                <Link href="https://github.com/portalmybot" target="_blank" rel="noopener" variant="subtitle1" color="textSecondary">
                   GitHub
                </Link>
              </li>
              <li key='discord'>
                <Link href="https://portalmybot.com/discord" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Discord
                </Link>
              </li>
              <li key='twitter'>
                <Link href="https://twitter.com/portalmybot" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Twitter
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} key={'Recursos'}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Recursos
            </Typography>
            <ul className={classes.footerList}>
              <li key='soporte'>
                <Link href="team@portalmybot.com" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Soporte
                </Link>
              </li>
              <li key='certi'>
                <Link href="https://portalmybot.com/mybotlist/certified" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Certificado
                </Link>
              </li>
              <li key='tos'>
                <Link href="https://portalmybot.com/mybotlist/tos" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   Términos y condiciones
                </Link>
              </li>
              <li key='api-list'>
                <Link href="#" variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
                   API MyBOT List
                </Link>
              </li>
            </ul>
          </Grid>

        </Grid>
        <Box mt={5}>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Todos los derechos reservados, Desarrollado por {' '}
             <Link color="secondary" target="_blank" href="https://github.com/cratermaik/" rel="noopener">
               @CraterMaik
             </Link>
           </Typography>
          <Copyright />
        </Box>
      </Container>
    </footer>
  )
}
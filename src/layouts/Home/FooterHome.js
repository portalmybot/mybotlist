import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const footers = [{
    title: 'Contacto',
    description: ['team@portalmybot.com', 'Discord', 'Twitter'],
  },
  {
    title: 'Enlaces',
    description: ['Team', 'Terminos de servicio', 'Privacidad', 'Anuncios'],
  },
  {
    title: 'Partners',
    description: ['PortaMyBOT', 'MyCHAT', 'CraterMaik', 'Facebook'],
  },
  {
    title: 'Comunidad',
    description: ['PortalMyBOT API', 'Certificado', 'Contribuidores'],
  },
];

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
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
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
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
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
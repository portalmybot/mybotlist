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
import { amber } from '@material-ui/core/colors';

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
  alinks: {
    color: 'aqua'
  }
}));


const TosPage = () => {
  const classes = useStyles();

  return (
      <Layout>
        {
            <>
              <Seo 
                title='Términos de servicio — MyBOT List'
                description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'
                url='https://portalmybot.com/list/tos'
                image='https://i.imgur.com/DC0Kp0D.png' />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>

                        <Container maxWidth="lg" component="main" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            Términos de servicio
                          </Typography>
                        </Container>
                        
                        <Container maxWidth="md" component="section">
                          <Typography variant="subtitle1" color="textSecondary" component="p">
                            ¡Gracias por usar PortalMyBOT! Estos términos de servicio describen las reglas y regulaciones para el uso del sitio web de PortalMyBOT (MyBOT List), ubicado en <a href="https://portalmybot.com/" className={classes.alinks}>https://portalmybot.com/</a>.<br/>
                            Al acceder al sitio web, acepta estos términos. 
                            No continúe utilizando PortalMyBOT si no está de acuerdo con los términos establecidos en esta página.
                          </Typography>

                          <Typography variant="h6" color="textPrimary" component="h3" className={classes.titleUsers}>
                            Definiciones
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            La siguiente terminología se aplica a estos Términos de servicio y Declaración de privacidad. <br/><br/>
                            "El Usuario", "Usted" y "Su" se refieren a la persona, empresa u organización que ha visitado o está utilizando el Sitio web o el Servicio. Un usuario debe tener al menos 13 años de edad. <br/><br/>
                            Todos los términos se refieren a la oferta, aceptación y consideración del pago necesario para llevar a cabo el proceso de nuestra asistencia al Usuario de la manera más adecuada con el propósito expreso de satisfacer las necesidades del Usuario con respecto a la prestación de los servicios declarados por la Compañía, en conforme y sujeto a la ley vigente de los Países Bajos.Cualquier uso de la terminología anterior u otras palabras en singular, plural, mayúsculas y/o él/ella o ellos, se toman como intercambiables y, por lo tanto, se refieren a los mismos.
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

export default TosPage;



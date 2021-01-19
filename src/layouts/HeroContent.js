import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 0, 5),
    width: '60%',
    margin: theme.spacing(0, 'auto')
    
  },
 })
)
export default function HeroContent() {
  const classes = useStyles();
   return (
    <div className={classes.heroContent}>
      <Typography component="h1" variant="h3" align="center" color="inherit" gutterBottom>
        MyBOT List
      </Typography>
      <Typography variant="h5" align="center" color="inherit" paragraph>
        Una plataforma para el listado de Bots publicos de discord en español,
        puede usar nuestra lista para descubrir nuevos bots desarrollados por los miembros
        de la comunidad MyBOT Team.
      </Typography>
    </div>
   )
  
}
 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 0, 2),
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  textCotent: {
    maxWidth: 900,
    margin: theme.spacing(0, 'auto'),
  }
 })
)
export default function HeroContent() {
  const classes = useStyles();
   return (
    <div className={classes.heroContent}>
      <Typography component="h1" variant="h3" align="center" color="inherit" gutterBottom>
        
        <Box fontWeight="fontWeightBold" m={1}>
          MyBOT List
        </Box>
      </Typography>
      <Typography variant="h5" align="center" color="inherit" className={classes.textCotent} paragraph>
        Una plataforma para el listado de Bots publicos de discord en español,
        puede usar nuestra lista para descubrir nuevos bots desarrollados por los miembros
        de la comunidad MyBOT Team.
      </Typography>
    </div>
   )
  
}
 
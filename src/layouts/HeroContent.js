import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import HomeTags from './TagsHome.js';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 5, 20, 5),
    width: '100%',
    background: theme.palette.background.paper,
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
      <Typography variant="h6" align="center" color="inherit" className={classes.textCotent} paragraph>
        Lista de Bots publicos de Discord en español, descubre nuevos Bots desarrollados por los miembros
        de la comunidad MyBOT Team
      </Typography>
      
      <HomeTags />
    </div>
   )
  
}
 
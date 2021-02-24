import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Badge from './Badges';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';

import LinksBot from './LinksBot';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(3, 2),

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(3)
  },
  subtitle: {
    marginTop: theme.spacing(2)
  },
  subtags: {
    marginTop: theme.spacing(5)
  },
  tags: {
    marginRight: theme.spacing(1)
  },
}))
const badges = ['verificado', 'premium']

export default function InfoBot() {
  const classes = useStyles();

  return (
    <Container maxWidth={'lg'} className={classes.container}>
      <Typography variant="h3" component="h1" className={classes.title}>
        MyBOT
         {badges.map((bg) => {
              return (
                <Badge key={bg} value={bg} />
              );
         })}
      </Typography>

      <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="contained" aria-label="small outlined button group">
        <Button color="primary">Prefix</Button>
        <Button>?</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="contained" aria-label="small outlined button group">
        <Button color="secondary">Estado</Button>
        <Button>Online</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="contained" aria-label="small outlined button group">
        <Button style={{ backgroundColor: 'olive', color: 'white' }}>Libreria</Button>
        <Button>Discord.js</Button>
      </ButtonGroup>

      <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography variant="caption" display="block" className={classes.subtags} gutterBottom>
        Tags:
      </Typography>
      <Box component="span" m={0}>
        <Chip label="Administración" className={classes.tags} component="a" href="./tag/chip" clickable variant="outlined" />
        <Chip label="Memes" className={classes.tags} component="a" href="./tag/chip" clickable variant="outlined" />
        
      </Box>
      <LinksBot />
      
    </Container>
   
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Badge from './Badges';

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
                
                <Badge value={bg} />
              );
            
         })}
      </Typography>
    </Container>
   
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3, 2, 4),
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
}))

export default function InfoUser() {
  const classes = useStyles();

  return (
    <Container maxWidth={'lg'} className={classes.container}>
      <Typography variant="h4" component="h1" className={classes.title}>
        CraterMaik
      </Typography>
    </Container>
   
  );
}

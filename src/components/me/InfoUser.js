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
    marginBottom: theme.spacing(3)
  },
}))

export default function InfoUser({ user }) {
  const classes = useStyles();
  const { social_provider } = user;

  return (
    <Container maxWidth={'lg'} className={classes.container}>
      <Typography variant="h3" component="h1" className={classes.title}>
        { social_provider }
        
      </Typography>
    </Container>
   
  );
}

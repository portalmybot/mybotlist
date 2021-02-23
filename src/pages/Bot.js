import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    margin: theme.spacing(1.5, 0)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth={false} className={classes.containerbg} style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <Container maxWidth={'lg'}>
          <div className={classes.root}>
            <Grid container spacing={3}>

              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
            </Grid>
          </div>
        
        </Container>
      </Container>
    </Layout>
  );
}
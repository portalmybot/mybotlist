import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import AvatarBot from "../components/bot/AvatarBot";
import InfoBot from "../components/bot/InfoBot";
import ActionBot from "../components/bot/ActionBot";
import DevsBot from "../components/bot/DevsBot";

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    padding: theme.spacing(3, 0),
  },
  action: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  paper: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
}))

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth={false} className={classes.containerbg}/*  style={{ background: 'linear-gradient(to right, rgba(34, 36, 38, 0.68), rgba(34, 36, 38, 0.68)), url(https://i.imgur.com/94Mqbdi.jpeg) center top / cover no-repeat fixed', height: '150vh' }} */>
        <Container maxWidth={'lg'}>
          <div className={classes.root}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={12} sm={6}>
                <Box display="flex">
                  <Box m="auto">
                    <AvatarBot />
                  </Box>
                </Box>
                <Box className={classes.action}>
                  <ActionBot />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} >
                <InfoBot />
              </Grid>
              
              <Grid item xs={12}>
                <Divider style={{ marginBottom: 20 }}/>
                <Box className={classes.paper}>
                  Desarrollado por: 
                  <Box>
                    <DevsBot />
                    <DevsBot />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Divider style={{ marginBottom: 20 }}/>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
            </Grid>
          </div>
        
        </Container>
      </Container>
    </Layout>
  );
}
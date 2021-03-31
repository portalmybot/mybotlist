import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Bot from './BotCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  paper: {
    height: 260,
    width: 180,
  },
}));
const bots = [1, 2];

export default function BotsUser() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>

      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <>
            {bots.map((bot) => {
              return (
                  <Grid key={bot} item xs={12} sm={6} md={4} lg={3}>
                    <Bot bot={bot} />
                  </Grid>
                )
              })
            }
          </>
        </Grid>
      </Grid>
     
    </Grid>
  );
}

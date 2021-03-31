import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Bot from './Bot.js';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(-10),
  }
 })
)
const Bots = [1,2,3,4,5,6,7,8,9,10]

const BotList = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={5}>
            <>
              {
                Bots.map((bot) => {
                  return (
                    <Grid key={`${bot}-bot`} item xs={12} sm={6} md={4} lg={3}>
                      <Bot key={bot}/>
                    </Grid>
                  )
                })
              }
            </>
        </Grid>
      </Container>
    </>
  )

}
export default BotList

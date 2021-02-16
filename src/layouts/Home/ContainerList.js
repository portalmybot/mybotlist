import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useQuery } from 'react-query'

import CardList from './CardList.js';

import getAllBots from '../../services/bot.service';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(-10),
  }
 })
)

const BotList = () => {
  const classes = useStyles();
  const {isLoading, data: bots} = useQuery('bots', getAllBots, {
     refetchAllOnWindowFocus: false,
  })

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={5}>
          {isLoading ? 'Cargando...' : null}
          {!isLoading && bots ?  
            <>
              { 
                bots.data.map((bot) => {
                  return (
                    <Grid item key={`bot-${bot.id}`} xs={12} sm={6} md={3}>
                      <CardList value={bot} />
                    </Grid>
                  )
                })
              }
            </>
          : null}
        </Grid>
      </Container>
    </>
  )

}
export default BotList

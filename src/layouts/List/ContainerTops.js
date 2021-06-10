import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useQuery } from 'react-query'

import Bot from '../Home/Bot';
import BotLoading from '../../components/skeleton/BotLoading';

import { getListTopBots } from '../../services/bot.service';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(-10),
  }
 })
)
const SLoading = [1,2,3,4,5,6,7,8,9]

const ListTopBots = () => {
  const classes = useStyles();
  const {isLoading, data: listTopBots} = useQuery('listTopBots', getListTopBots)

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={5}>
          {isLoading && (
            <>
              {
                SLoading.map((load) => {
                  return (
                   <Grid item key={load} xs={12} sm={6} md={3}>
                      <BotLoading />
                    </Grid>
                  )
                })
              }
            </>
          )}
          {!isLoading && listTopBots ? 
            <>
              { 
                listTopBots.data.map((bot) => {
                  return (
                    <Grid key={`${bot.id}-bot`} item xs={12} sm={6} md={4} lg={3}>
                      <Bot value={bot} />
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
export default ListTopBots

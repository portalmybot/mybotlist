import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { useQuery } from 'react-query'

import Bot from '../../layouts/Home/Bot';
import BotLoading from '../../components/skeleton/BotLoading';
import { getHomeBotsVerified } from '../../services/bot.service';

const useStyles = makeStyles((theme) => ({
   gridBot: {
      marginBottom: theme.spacing(3),
   }
 })
)

const SLoading = [1,2,3,4,5,6,7,8]

const BotsVerified = () => {
  const classes = useStyles();
  const {isLoading, data: botsVerified} = useQuery('botsVerified', getHomeBotsVerified)

  return (
        <Grid container spacing={5} className={classes.gridBot}>
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
          {!isLoading && botsVerified ?  
            <>
              { 
                botsVerified.data.map((bot) => {
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
  )

}
export default BotsVerified

import React from 'react';
/* import { makeStyles } from '@material-ui/core/styles'; */
import Grid from '@material-ui/core/Grid';

import { useQuery } from 'react-query'

import Bot from '../../layouts/Home/Bot';
import BotLoading from '../../components/skeleton/BotLoading';
import { getHomeBotsNews } from '../../services/bot.service';

const SLoading = [1,2,3,4,5,6,7,8]

const BotsNews = () => {
  const {isLoading, data: botsNews} = useQuery('getHomeBotsNews', getHomeBotsNews)

  return (
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
          {!isLoading && botsNews ?  
            <>
              { 
                botsNews.data.map((bot) => {
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
export default BotsNews

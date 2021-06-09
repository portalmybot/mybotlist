import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useQuery } from 'react-query'

import Bot from '../../layouts/Home/Bot';
import BotLoading from '../../components/skeleton/BotLoading';
import { getHomeBotsVoteTop } from '../../services/bot.service';


const useStyles = makeStyles((theme) => ({
   gridBot: {
      margin: theme.spacing(3, 3),
   }
 })
)

const SLoading = [1,2,3,4,5,6,7,8]

const BotsTopVote = () => {
  const classes = useStyles();
  const {isLoading, data: botsTopVote} = useQuery('botsTopVote', getHomeBotsVoteTop)

  return (
      <>
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
          {!isLoading && botsTopVote ?  
            <>
              { 
                botsTopVote.data.map((bot) => {
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
        
          <Grid className={classes.gridBot} container direction="row" justify="center" alignItems="center">
            <Link underline='none' component={RouterLink} className={classes.expand} to={'/list/top'} color="inherit">
              <Button variant="contained" size="large" color="secondary">
                Ver más
              </Button>
            </Link>
          </Grid>
      </>
        
  )

}
export default BotsTopVote

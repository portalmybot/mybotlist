import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { cyan } from '@material-ui/core/colors';
import { useQuery } from 'react-query'
import FiberNewIcon from '@material-ui/icons/FiberNew';

import Bot from '../Home/Bot';
import BotLoading from '../../components/skeleton/BotLoading';

import { getListNewBots } from '../../services/bot.service';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(-10),
  },
  textContent: {
    display: 'flex',
    
  },
  textSubtitle: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(-4.5),
    marginBottom: theme.spacing(2)
  },
  iconText: {
    marginRight: theme.spacing(1),
    fontSize: theme.spacing(5),
    marginTop: theme.spacing(.3)
  }
 })
)

const SLoading = [1,2,3,4,5,6,7,8,9]

const ListNewsBots = () => {
  const classes = useStyles();
  const {isLoading, data: listNewBots} = useQuery('listNewBots', getListNewBots)

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Box m="auto">
          <Typography variant="subtitle1" component="h1" color="inherit" className={classes.textContent} paragraph>
            <FiberNewIcon className={classes.iconText} style={{ color: cyan['700'] }} /> DISCORD BOTS RECIENTES
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.textSubtitle}>
            ¡Lista de bots recientemente agregados a la lista!
          </Typography>
        </Box>
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
          {!isLoading && listNewBots ? 
            <>
              { 
                listNewBots.data.map((bot) => {
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
export default ListNewsBots

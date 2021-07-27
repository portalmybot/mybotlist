import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

import { useQuery } from 'react-query'

import Bot from '../Home/Bot';
import BotLoading from '../../components/skeleton/BotLoading';

import { getListVerifiedBots } from '../../services/bot.service';

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

const ListVerifiedBots = () => {
  const classes = useStyles();
  const {isLoading, data: listVerifiedBots} = useQuery('listVerifiedBots', getListVerifiedBots)

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Box m="auto">
          <Typography variant="subtitle1" component="h1" color="inherit" className={classes.textContent} paragraph>
            <OfflineBoltIcon className={classes.iconText} style={{ color: yellow['500'] }} /> DISCORD BOTS PREMIUMS
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.textSubtitle}>
            !Bots premiums de MyBOT List!
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
          {!isLoading && listVerifiedBots ? 
            <>
              { 
                listVerifiedBots.data.map((bot) => {
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
export default ListVerifiedBots

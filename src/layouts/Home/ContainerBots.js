import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import BotVoteTop from '../../components/home/BotVoteTop';
import BotNews from '../../components/home/BotNews';
import Typography from '@material-ui/core/Typography';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
  },
  textContent: {
    verticalAlign: 'middle',
    display: 'flex',
  },
  iconText: {
    color: 'red',
    marginRight: theme.spacing(1)
  }
 })
)

const BotList = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="subtitle1" color="inherit" className={classes.textContent} paragraph>
          <FavoriteBorderIcon className={classes.iconText} /> DISCORD BOTS MÁS VOTADOS
           
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          ¡Este es el ranking de los bots que recibieron más corazones!
        </Typography>
        <BotVoteTop />

        <BotNews />

      </Container>
    </>
  )

}
export default BotList

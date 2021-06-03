import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import BotVoteTop from '../../components/home/BotVoteTop';
import BotNews from '../../components/home/BotNews';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(-10),
  }
 })
)

const BotList = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <BotVoteTop />
        <BotNews />
      </Container>
    </>
  )

}
export default BotList

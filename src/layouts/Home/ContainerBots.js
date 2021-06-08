import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import BotVoteTop from '../../components/home/BotVoteTop';
import BotNews from '../../components/home/BotNews';
import Typography from '@material-ui/core/Typography';
import { red, cyan, green } from '@material-ui/core/colors';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
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

const TitleContent = (textTitle) => {
  
  const classes = useStyles();
  return (
    <>
       <Typography variant="subtitle1" color="inherit" className={classes.textContent} paragraph>
          {textTitle.icon === 'vote' ?  <FavoriteBorderIcon className={classes.iconText} style={{ color: red[600] }} /> : textTitle.icon === 'new' ? <FiberNewIcon className={classes.iconText} style={{ color: cyan[700] }} /> : textTitle.icon === 'veri' ? <VerifiedUserIcon className={classes.iconText} style={{ color: green['A400'] }} /> : null } {textTitle.title}
         
        </Typography>

        <Typography variant="subtitle2" gutterBottom className={classes.textSubtitle}>
          {textTitle.subtitle}
        </Typography>
    </>
  )
}

const BotList = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">

        <TitleContent icon="vote" title="DISCORD BOTS MÁS VOTADOS" subtitle="¡Este es el ranking de los bots que recibieron más corazones!" />
        <BotVoteTop />

        <TitleContent icon="veri" title="DISCORD BOTS VERIFICADOS" subtitle="¡Son bots de confianza certificados por MyBOT Team!" />
        <BotNews />

        <TitleContent icon="new" title="DISCORD BOTS RECIENTES" subtitle="¡Lista de bots recientemente agregados a la lista!" />
        <BotNews />

      </Container>
    </>
  )

}
export default BotList


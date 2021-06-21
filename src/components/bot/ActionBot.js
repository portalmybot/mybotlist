import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0, .5, 1.6),
  },
}));

export default function ActionBot({ bot }) {
  const classes = useStyles();
  const { id_bot, vote_bot, serverCount_bot } = bot;
  return (
    <div>
        <Link underline='none' component={RouterLink} to={'/bot/'+id_bot+'/vote'} color="inherit">
          <Tooltip title={'Tiene ' + vote_bot + ' reputaciones asignadas.'}>
            <ButtonGroup aria-label="small outlined button group">
              <Button variant="contained" style={{ color: '#fff', backgroundColor: '#e91e63' }}>{vote_bot} Rep.</Button>
              <Button variant="contained" style={{ color: '#fff', backgroundColor: '#c50546' }}> <EmojiEventsIcon /> </Button>
            </ButtonGroup>

          </Tooltip>
        </Link>
      {serverCount_bot && (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            variant="contained"
            style={{ color: '#fff', backgroundColor: '#7289da' }}
            className={classes.button}>
            {serverCount_bot} Servidores
          </Button>
          
        </ButtonGroup>

      )}
    </div>
  );
}

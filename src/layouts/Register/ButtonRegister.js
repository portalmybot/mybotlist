import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    margin: theme.spacing(0, 'auto'),
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  },
}));

export default function ButtonRegister() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button variant="contained" target="_blank"
      rel="noopener noreferrer" color="primary" href="https://discordapp.com/api/oauth2/authorize?client_id=550712806543065108&redirect_uri=https%3A%2F%2Fportalmybot.com%2Flist%2Fauth%2Fdiscord&scope=identify+email&response_type=code">
        Registrate vía Discord
      </Button>
      <Button variant="contained" target="_blank"
      rel="noopener noreferrer" color="secondary" href="https://discord.gg/g6ssSmK">
        Comunidad
      </Button>
    </div>
  );
}

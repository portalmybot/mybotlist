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
      rel="noopener noreferrer" color="primary" href="/login">
        Registrate vía Discord
      </Button>
      <Button variant="contained" target="_blank"
      rel="noopener noreferrer" color="secondary" href="https://discord.gg/g6ssSmK">
        Comunidad
      </Button>
    </div>
  );
}

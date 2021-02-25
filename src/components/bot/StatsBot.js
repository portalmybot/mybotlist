import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, .2),
  },
}));

export default function StatsBot() {
  const classes = useStyles();

  return (
    <div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          variant="contained"
          style={{ color: '#fff', backgroundColor: '#7289da' }}
          className={classes.button}>
          532 Servidores
        </Button>
      </ButtonGroup>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          variant="contained"
          style={{ color: '#fff', backgroundColor: '#e91e63' }}
          className={classes.button}>
          15 Rep.
        </Button>
      </ButtonGroup>

    </div>
  );
}

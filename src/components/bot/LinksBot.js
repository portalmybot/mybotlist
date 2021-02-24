import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: theme.spacing(2)
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" color="secondary" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

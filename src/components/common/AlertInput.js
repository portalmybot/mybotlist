import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(5),
    },
  },
}));

const DescriptionAlerts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
        Su BOT fue agreado correctamente.
      </Alert>
    </div>
  );
}

export default DescriptionAlerts;
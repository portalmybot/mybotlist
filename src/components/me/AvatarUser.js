import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AdbIcon from '@material-ui/icons/Adb';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(38),
    height: theme.spacing(38),
  }
}));

export default function AvatarBot() {
  const classes = useStyles();

  return (

      <Avatar variant="square" className={classes.large}>
        <AdbIcon />
      </Avatar>

  );
}

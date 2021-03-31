import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(38),
    height: theme.spacing(38),
  }
}));

export default function AvatarBot() {
  const classes = useStyles();
  return (
    <Avatar variant="square" src='https://source.unsplash.com/random' className={classes.large} />
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  }
}));

export default function AvatarBot() {
  const classes = useStyles();

  return (
    <Avatar variant='circular' className={classes.large} alt='demo' src='https://source.unsplash.com/random' />

  );
}

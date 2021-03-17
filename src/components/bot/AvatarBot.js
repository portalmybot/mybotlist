import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(38),
    height: theme.spacing(38),
  }
}));

export default function AvatarBot({ bot }) {
  const classes = useStyles();
  const { avatarUrl_bot } = bot;
  return (
    <Avatar variant="square" src={avatarUrl_bot} className={classes.large} />
  );
}

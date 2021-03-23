import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(.5),
  },
}));

export default function DevsBot({ user }) {
  const classes = useStyles();
  const { social_provider, social_avatarUrl } = user;

  return (
      <Chip
        className={classes.root}
        avatar={<Avatar alt={'Avatar '+social_provider} src={social_avatarUrl} />}
        label={social_provider}
        component="a" href={'../u/'+social_provider} clickable
      />
  );
}

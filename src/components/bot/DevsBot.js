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

export default function SmallChips() {
  const classes = useStyles();

  return (
      <Chip
        className={classes.root}
       /*  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />} */
        avatar={<Avatar>M</Avatar>}
        label="CraterMaik"
        component="a" href="user/" clickable
      />
  );
}

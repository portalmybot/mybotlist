
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(2),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <IconButton edge="start" className={classes.icon} color="inherit">
      <Avatar alt="Logo MyBOT List" variant="square" src={Logo} />
    </IconButton>
  );
}

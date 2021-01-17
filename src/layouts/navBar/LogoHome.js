
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(3),
  },
}));

export default function LogoHome() {
  const classes = useStyles();

  return (
    <Avatar className={classes.icon} alt="Logo MyBOT List" src={Logo} />
  );
}

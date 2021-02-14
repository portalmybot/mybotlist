
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Logo from './logo.png';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    cursor: 'pointer',
  },
}));

export default function LogoHome() {
  const history = useHistory();
  const navigateTo = () => history.push('/');

  const classes = useStyles();

  return (
    <Link onClick={navigateTo}>
      <Avatar className={classes.icon} alt="Logo MyBOT List" src={Logo} />
    </Link>
    
  );
}

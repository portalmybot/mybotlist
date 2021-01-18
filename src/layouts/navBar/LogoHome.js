
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    
  },
}));

export default function LogoHome() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault()

  return (
    <Link href="#" onClick={preventDefault}>
      <Avatar className={classes.icon} alt="Logo MyBOT List" src={Logo} />
    </Link>
    
  );
}

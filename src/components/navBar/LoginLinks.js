/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const LoginLink = () => {
  const [login, setLogin] = useState([]);

  useEffect(() => {
    fetch("/api/auth/discord/login")
      .then(data => {
        return data.json();
      })
      .then(data => {
        setLogin(data.url);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
 
  const classes = useStyles();
  console.log(login);
  return (
    <Typography className={classes.root}>
        {login && (
          <Link href={login} color="inherit">
            Login
          </Link>
        )}
        <Link component={RouterLink} to="/register" color="inherit">
            Registrar 
        </Link>
    </Typography>
  )

}
export default LoginLink;

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
  const [login, setLogin] = useState([{
    isAuth: false,
    url: null
  }]);

  useEffect(() => {
    fetch("/api/auth/discord/login")
      .then(data => {
        return data.json();
      })
      .then(data => {
        setLogin({
          url: data.url,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
 
  const classes = useStyles();
  const { isAuth, url } = login;
  let LinkAuth = !!isAuth ? (
    <Link href="#" color="inherit">
        Perfil
    </Link>
  ) :
  (
    <Link href={url} color="inherit">
      Login
    </Link>
  );
   
  return (
      
    <Typography className={classes.root}>
        { LinkAuth }
        <Link component={RouterLink} to="/register" color="inherit">
            Registrar 
        </Link>
    </Typography>
  )

}

export default LoginLink;
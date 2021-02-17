/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import Auth from "../router/Auth";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const LoginLink = () => {

  const [login, setLogin] = useState([{
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
  const { url } = login;
  
  return (
      
    <Typography className={classes.root}>
        {Auth.isAuthenticated() ? (
          <Link component={RouterLink} to="/me" color="inherit">
            Perfil
          </Link>
        ): (
          <>
          <Link href={url} color="inherit">
            Login
          </Link>

          <Link component={RouterLink} to="/register" color="inherit">
              Registrar 
          </Link>
          </>
        )}

    </Typography>
  )

}

export default LoginLink;
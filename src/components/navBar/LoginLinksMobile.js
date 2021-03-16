/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

import MenuAuth from "./Menu";
import Auth from "../router/Auth";

 
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const LoginLinkMobile = () => {
  const preventDefault = (event) => event.preventDefault();
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
         <MenuAuth />
        ): (
          <>
           <MenuItem>
              <Link href={url} onClick={preventDefault} color="inherit">
                Login
              </Link>
            </MenuItem>
            <MenuItem>
              <Link component={RouterLink} to="/register" onClick={preventDefault} color="inherit">
                Registrar
              </Link>
            </MenuItem>
          </>
        )}

    </Typography>
    
  )

}

export default LoginLinkMobile;
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Http from '../../services/HttpService';

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
 
      Http.get(`/auth/discord/login`)
        .then((response) => {
          setLogin({
            url: response.data.url,
          });

        })
        .catch((error) => {
          console.log(error);

        })

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
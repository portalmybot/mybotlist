import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import MenuAuth from "./Menu";
import Auth from "../router/Auth";
import Http from '../../services/HttpService';

 
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
import React, { useEffect } from 'react'
/* import { Redirect } from 'react-router'; */
/* import { useHistory } from "react-router-dom";

import useToken from './components/useToken';
import useIdUser from './components/useIdUser'; */
import AuthService from './services/AuthService';

export default function Login(props) {
  
/*   const { token, setToken } = useToken();
  const { id, setId } = useIdUser(); */

  useEffect(() => {
    fetch(`/api/auth/discord/callback/${props.location.search}`, {
          headers: new Headers({
            accept: 'application/json',
          })
        })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('¡Algo salió mal!');
        })
        .then((data) => {
          AuthService.handleLoginSuccess(data, true)
          
          window.location.href = 'http://localhost:3000/me';

        })
        .catch((error) => {
          console.log(error);

        })

  }, [props]);

  return (
    <div>
       {/*  <Redirect from='/' to='/me'/> */}
    </div>
  );
}

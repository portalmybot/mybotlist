import React, { useEffect } from 'react'
import AuthService from './services/AuthService';
import LoadingPage from './components/common/LoadingPage';

export default function Login(props) {

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_AUTH}/discord/callback/${props.location.search}`, {
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
          window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;

        })
        .catch((error) => {
          console.log(error);

        })

  }, [props]);

  return (
    <> 
      <LoadingPage />
    </>
  );
}

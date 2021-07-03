import React, { useEffect } from 'react'
import AuthService from './services/AuthService';
import LoadingPage from './components/common/LoadingPage';
import Http from './services/HttpService';

export default function Login(props) {
  
  useEffect(() => {
    Http.get(`/auth/discord/callback/${props.location.search}`)
      .then(res => {
        AuthService.handleLoginSuccess(res.data, true)
        window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;
      })
      .catch(error => console.log(error));
  }, [props]);

  return (
    <> 
      <LoadingPage />
    </>
  );
}

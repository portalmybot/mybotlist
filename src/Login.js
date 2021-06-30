import React, { useEffect } from 'react'
import AuthService from './services/AuthService';
import LoadingPage from './components/common/LoadingPage';
import axios from "axios";

export default function Login(props) {

  useEffect(() => {
  
    axios.get(`${process.env.REACT_APP_API_AUTH}/discord/callback/${props.location.search}`)
    .then((response) => {
      console.log(response)
      AuthService.handleLoginSuccess(response.data, true)
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

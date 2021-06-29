import React, { useEffect } from 'react'
import AuthService from './services/AuthService';
import LoadingPage from './components/common/LoadingPage';
/* import axios from "axios"; */

export default function Login(props) {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_AUTH}/discord/callback/${props.location.search}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include'
        });
        const data = await response.json();
        console.log(data)
        AuthService.handleLoginSuccess(data, true)
        window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;

      } catch(error) {
        console.log(error);
      }
    }
    fetchData();
  /*   axios.get(`${process.env.REACT_APP_API_AUTH}/discord/callback/${props.location.search}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((response) => {
      console.log(response)
      AuthService.handleLoginSuccess(response, true)
      window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;

    })
    .catch((error) => {
      console.log(error);

    }) */

  }, [props]);

  return (
    <> 
      <LoadingPage />
    </>
  );
}

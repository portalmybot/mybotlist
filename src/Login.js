import React, { useEffect } from 'react'
/* import AuthService from './services/AuthService'; */
import LoadingPage from './components/common/LoadingPage';
/* import axios from "axios"; */
/* 
{
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  }
}
*/
export default function Login(props) {
  async function fetchData() {
    const res = await fetch('https://api.portalmybot.com/api/app/auth/discord/callback/' + props.location.search, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      credentials: 'same-origin'

    });
    res
      .json()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

 /*  useEffect(() => { */
    /* async function fetchMyAPI() { */
      /* let response = await fetch('https://api.portalmybot.com/api/app/auth/discord/callback/'+props.location.search)
      response = await response.json()
      console.log(response)
      AuthService.handleLoginSuccess(response.data, true) */
      /* fetch('https://api.portalmybot.com/api/app/auth/discord/callback/' + props.location.search)
        .then(data => {
          console.log(data)

        })
        .catch(err => {
            console.log(err)
        }); */
    /* }
 */
    /* fetchMyAPI() */

   /*  const data = await axios.get('https://meme-api.herokuapp.com/gimme', {
      headers
    }).then(res => res.data); */

    /* axios.get(`${process.env.REACT_APP_API_AUTH}/discord/callback/${props.location.search}`,{
       headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Request-Method': 'GET, POST, PUT, DELETE',
       }
    })
    .then((response) => {
      console.log(response)
      AuthService.handleLoginSuccess(response.data, true)
      window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;

    })
    .catch((error) => {
      console.log(error);

    }) */

 /*  }, [props]); */

  return (
    <> 
      <LoadingPage />
    </>
  );
}

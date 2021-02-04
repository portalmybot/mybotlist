import React, { useEffect } from 'react'

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  
}

/* function getToken() {
  const tokenString = localStorage.getItem('token');
  
  const userToken = JSON.parse(tokenString);
  console.log(userToken)
  return userToken.length ? true : false
} */

export default function Login(props) {
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
          setToken(data.access_token)

          /* this.setState({
            loading: false,
            data
          }); */

        })
        .catch((error) => {
          /* this.setState({
            loading: false,
            error
          }); */
          console.log(error);
        })

  }, [props]);

  return (
    <div>
        Hola
    </div>
  );
}

import React, { useEffect } from 'react'
import useToken from './components/useToken';



export default function Login(props) {
  
  const { token, setToken } = useToken();

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

          if(!token) {
            setToken(data.access_token)
            
          }
          

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

  }, [props, token, setToken]);

  return (
    <div>
        Hola
    </div>
  );
}

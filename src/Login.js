import React, { useEffect } from 'react'
import { Redirect } from 'react-router';
import useToken from './components/useToken';
import useIdUser from './components/useIdUser';

export default function Login(props) {
  
  const { token, setToken } = useToken();
  const { id, setId } = useIdUser();

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
            setId(data.id_discord)
            
          }

        })
        .catch((error) => {
          console.log(error);

        })

  }, [props, token, setToken, id, setId]);

  return (
    <div>
        <Redirect to="/me" />
    </div>
  );
}

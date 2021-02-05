import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router';
import useToken from '../components/useToken';

const Me = () => {
  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [very, setVery] = useState(false);

  const {token} = useToken();

  useEffect(() => {
    
    if(!token) {
      return setVery(true);
    }

    fetch('/api/v1/details', {
        headers: new Headers({
          Authorization: "Bearer " + token,
          Accept: 'application/json',
        }),
        method: "POST"
      })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        setIsLoading(false);
        setError(true)
      })
      .then(json => {
        setData(json.success)
        setIsLoading(false);
      })
      .catch((error) => {});
  }, [token]);
   

  return (
    <div>
      {very ? (
        <Redirect to="/" />
      ): null}

      {isLoading ? (
        "Cargando...."
        ): null}

      {!isLoading && error ? (
          <h2>¡Oh, no, algo salió mal!</h2>
          
          
        ): null}

      {data ? (
        <h2>Hola {data.name}</h2>
      ): null}

    </div>
  )
};

export default Me;
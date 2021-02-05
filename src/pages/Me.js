import React, {useEffect, useState} from 'react'
//import MeService from '../services/me';
import axios from "axios";
import useToken from '../components/useToken';

const Me = () => {
  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
 // const [very, setVery] = useState(false);

  const {token} = useToken();

  useEffect(() => {

    const article = {
      title: 'React POST Request Example'
    };
    const headers = {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json'
    };
    axios.post('http://127.0.0.1:8000/api/v1/details', article, {
        headers
      })
      .then(response => {
        
          if(response.status === 200) {
            return setData(response.data.success)

          }
          setIsLoading(false)
          setError(true)
      });
    
    /* if(!token) {
      return setVery(true);
    } */
    /* MeService.getUserProfile().then(
      (response) => {
        setData(response.success)
        setIsLoading(false);
      },
      (error) => {
        const _content = error.toString();
        setData(_content);
        setError(true);
        
      }
    ) */
  /*   fetch('/api/v1/details', {
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
      .catch((error) => {}); */
  }, [token]);
   

  return (
    <div>
      {/* {very ? (
        <Redirect to="/" />
      ): null} */}

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
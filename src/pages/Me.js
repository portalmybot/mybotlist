import React, {useEffect, useState} from 'react'
import MeService from '../services/me';

const Me = () => {
  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    MeService().then(
      (response) => {
        console.log(response);
        setData(response.data.success)
        setIsLoading(false);
      },
      (error) => {
      
        setError(true);
        
      }
    )
 
  }, []);
   

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
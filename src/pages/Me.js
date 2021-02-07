import React, {useEffect, useState} from 'react'
import MeService from '../services/me.service';

const Me = () => {
  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    MeService().then(
      (response) => {
        console.log(response.data)
        if(response.status === 200) {
         setIsLoading(false);
         return setData(response.data.success)

        }
        setIsLoading(false);
        
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    )
 
  }, []);
   

  return (
    <div>
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
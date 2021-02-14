import React, {useEffect, useState} from 'react'

import MeContent from '../layouts/Me/MeContent';
import MeService from '../services/me.service';
import Layout from '../components/Layout';


const Me = () => {
  const [data, setData] = useState();
/*   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false); */

  useEffect(() => {
    (async () => {
      const data = await MeService()
      console.log('response', data)
     // navigation.navigate(data ? 'App' : 'Auth')
      setData(data.user.social_provider)
    })()

/*     MeService().then(
      (response) => {
        if(response.status === 200) {
         setIsLoading(false);
         return setData(response.data.user.social_provider)

        }
        setIsLoading(false);
        
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    ) */
 
  }, []);
  
  return (
     <div>
      <Layout>

          <MeContent data={data} />

      </Layout>
     </div>

  )
};

export default Me;



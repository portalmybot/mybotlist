import React, {useEffect, useState} from 'react'

import MeContent from '../layouts/Me/MeContent';
import MeService from '../services/me.service';
import Layout from '../components/Layout';


const Me = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    MeService().then(
      (response) => {
       // console.log(response)
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
    )
 
  }, []);
  console.log(data);
  return (
     <div>
      <Layout>

          <MeContent data={[data, isLoading, error]} />
          
      </Layout>
     </div>

  )
};

export default Me;



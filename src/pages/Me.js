import React, {useEffect, useState} from 'react'

import MeContent from '../layouts/Me/MeContent';
import MeService from '../services/me.service';
import Layout from '../components/Layout';
/* import { useHistory } from 'react-router-dom';
 */
const Me = () => {
  const [data, setData] = useState();
/*   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false); */
 /*  const history = useHistory();

  function newRoute() {
    history.push('/my-route')
  } */
  
  useEffect(() => {
    (async () => {
      const data = await MeService()
      console.log('response', data)
     // navigation.navigate(data ? 'App' : 'Auth')
      setData(data.user.social_provider)
    })()
 
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



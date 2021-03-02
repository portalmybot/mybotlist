import React from 'react'
import { useQuery } from 'react-query'

import MeContent from '../layouts/Me/MeContent';
import { getUser } from '../services/me.service';
import Layout from '../components/Layout';

/* import { useHistory } from 'react-router-dom';
 */
const Me = () => {
  const { isLoading, data: user, error } = useQuery('getuser', getUser);

  return (
     <div>
      <Layout>
        {
          isLoading ? (
            'Cargando..'
          ) : error ? (
            <h1>Error!</h1>
          ) : (
            <MeContent user={user.user} />
          )
        }
      </Layout>
     </div>

  )
};

export default Me;



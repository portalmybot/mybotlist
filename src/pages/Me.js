import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router';
import useToken from '../components/useToken';

/* function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken ? userToken : false
} */

const Me = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([{
    username: null
  }])
  const {token} = useToken();

  useEffect(() => {
    
    if(!token) {
      Redirect('/')
    }
    fetch('/api/app/details', {
        headers: new Headers({
          Authorization: "Bearer " + token,
          Accept: 'application/json',
        }),
        method: "POST"
      })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUser({
          username: json.success.name
        })
        setIsLoading(true);
      });
  }, [token]);
   
 
  const { username } = user;
  return (
    <div>
      {!isLoading ? (
        "Cargando...."
      ): null}
      {isLoading ? (
        <h2>Hola {username}</h2>
      ):null}
      
    </div>
  )
};

export default Me;
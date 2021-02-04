import React, {useState, useEffect} from 'react'

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken ? userToken : false
}

let token = getToken()
console.log(token);

const Me = () => {
  const [user, setUser] = useState([{
    username: null
  }])
  useEffect(() => {
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
      });
  }, []);
   
 
  const { username } = user;
  return (
    <h2>Hola {username}</h2>
  )
};

export default Me;
const authHeader = () => {
  
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  
  if (tokenString) {
    return { 
        Accept: 'application/json',
        Authorization: 'Bearer ' + userToken
    };
  } else {
    return {};
  }

};

export default authHeader;
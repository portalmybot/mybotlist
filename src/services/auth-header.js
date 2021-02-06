const authHeader = () => {
  
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  const decodedStringBtoA = userToken;

  // Encode the String
  const encodedStringBtoA = btoa(decodedStringBtoA);
  console.log(encodedStringBtoA);

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
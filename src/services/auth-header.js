export default function authHeader() {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    };
  } else {
    return {};
  }
}
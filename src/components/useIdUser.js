import { useState } from 'react';

export default function useIdUser() {
  const getId = () => {
    const tokenString = localStorage.getItem('iduser_discord');
    const idUser = JSON.parse(tokenString);

    return idUser ? idUser : false
  };

  const [iduser, setId] = useState(getId());

  const saveId = idUser => {
    localStorage.setItem('iduser_discord', JSON.stringify(idUser));
    setId(idUser.iduser_discord);
  };

  return {
    setId: saveId,
    iduser
  }

}
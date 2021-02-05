import { useState } from 'react';

export default function useIdUser() {
  const getId = () => {
    const idString = localStorage.getItem('iduser_discord');
    const idUser = JSON.parse(idString);

    return idUser ? idUser : false
  };

  const [id, setId] = useState(getId());

  const saveId = idUser => {
    localStorage.setItem('iduser_discord', JSON.stringify(idUser));
    setId(idUser.iduser_discord);
  };

  return {
    setId: saveId,
    id
  }

}
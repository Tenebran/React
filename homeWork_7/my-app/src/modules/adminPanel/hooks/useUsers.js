import { useState, useEffect } from 'react';
import { getUsers } from '../services/usersService';

export default function useUsers() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => setUsersList(data));
  }, []);

  return {
    usersList,
  };
}

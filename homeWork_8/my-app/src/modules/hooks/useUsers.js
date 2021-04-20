import axios from 'axios';
import { useState, useEffect } from 'react';
import { getUsers } from '../services/usersService';
const CONTACTS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export default function useUsers() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => setUsersList(data));
  }, []);

  const deleteUsers = id => {
    axios.delete(CONTACTS_URL + id);
    setUsersList(usersList.filter(item => item.id !== id));
  };

  const newUser = user => {
    axios
      .post(CONTACTS_URL, user, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(({ data }) => {
        setUsersList(() => [...usersList, data]);
      });
  };

  return {
    usersList,
    newUser,
    deleteUsers,
  };
}

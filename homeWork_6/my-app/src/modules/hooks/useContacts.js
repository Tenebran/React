import Axios from 'axios';
import { useState, useEffect } from 'react';
import { CONTACTS_URL } from '../contacts/constans';

export default function useContacts() {
  const [bookList, setBookList] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Axios.get(CONTACTS_URL).then(({ data }) => setBookList(data));
  }, []);

  function toggleForm() {
    setVisible(!visible);
  }

  const deleteContacts = id => {
    Axios.delete(CONTACTS_URL + id);
    setBookList(bookList.filter(item => item.id !== id));
  };
  const newTodos = newTodo => {
    Axios.post(CONTACTS_URL, newTodo, {
      headers: { 'Content-Type': 'application/json' },
    }).then(({ data }) => {
      setBookList(() => [...bookList, newTodo]);
    });
  };
  return {
    bookList,
    visible,
    newTodos,
    toggleForm,
    deleteContacts,
  };
}

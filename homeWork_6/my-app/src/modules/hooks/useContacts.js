import Axios from 'axios';
import { useState, useEffect } from 'react';
import { CONTACTS_URL } from '../contacts/constans';

export default function useContacts() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    Axios.get(CONTACTS_URL).then(({ data }) => setBookList(data));
  }, []);

  const deleteContacts = id => {
    Axios.delete(CONTACTS_URL + id);
    setBookList(bookList.filter(item => item.id !== id));
  };
  const newContacts = Contact => {
    Axios.post(CONTACTS_URL, Contact, {
      headers: { 'Content-Type': 'application/json' },
    }).then(({ data }) => {
      setBookList(() => [...bookList, data]);
    });
  };
  return {
    bookList,
    newContacts,
    deleteContacts,
  };
}

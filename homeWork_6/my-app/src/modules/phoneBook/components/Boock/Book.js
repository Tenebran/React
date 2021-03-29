import React, { useContext, useState } from 'react';
import useContacts from '../../../hooks/useContacts';
import { themeContext } from '../../../../context/themeContext';
import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import './Book.scss';

export default function Book() {
  const [visible, setVisible] = useState(false);
  function toggleForm() {
    setVisible(!visible);
  }

  const { bookList, deleteContacts, newContacts } = useContacts();
  const deleteContact = id => deleteContacts(id);
  const createItem = newItem => newContacts(newItem);
  const { theme } = useContext(themeContext);

  return (
    <div className={theme}>
      <div>
        {visible === false ? (
          <BookList bookList={bookList} onDelete={deleteContact} onToggle={toggleForm} />
        ) : null}
        {visible === true ? <BookForm onSave={createItem} onToggle={toggleForm} /> : null}
        <button onClick={toggleForm} className="contact-info__button contact-info__button__add ">
          {visible === true ? 'Close' : 'Add'}
        </button>
        <ThemeToggler />
      </div>
    </div>
  );
}

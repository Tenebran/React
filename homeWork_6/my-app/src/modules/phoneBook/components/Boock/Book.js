import React, { useContext } from 'react';
import useContacts from '../../../hooks/useContacts';
import { themeContext } from '../../../../context/themeContext';
import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
import './Book.scss';

export default function Book() {
  const { bookList, visible, deleteContacts, newTodos, toggleForm } = useContacts();
  const deleteContact = id => deleteContacts(id);
  const createItem = newItem => newTodos(newItem);
  const { whiteTheme, darkTheme, theme } = useContext(themeContext);

  function onChangeTheme() {
    if (theme === 'white') {
      darkTheme();
    } else if (theme === 'dark') {
      whiteTheme();
    }
  }

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
        <button
          onClick={onChangeTheme}
          className=" contact-info__button contact-info__button__add "
        >
          {theme}
        </button>
      </div>
    </div>
  );
}

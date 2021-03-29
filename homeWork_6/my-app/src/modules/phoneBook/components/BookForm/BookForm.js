import React, { useState } from 'react';
import './BookForm.scss';

export default function BookForm({ onSave, onToggle }) {
  const [bookList, setbookList] = useState({
    name: '',
    surname: '',
    phone: '',
  });

  function onFormSubmit(e) {
    e.preventDefault();

    onSave(bookList);
    setbookList({ name: '', surname: '', phone: '' });
    onToggle();
  }

  function onInputChange(e) {
    setbookList({ ...bookList, [e.target.name]: e.target.value });
  }

  function onItemClick(e) {
    onToggle();
  }
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h3 className="form__title">User Add</h3>
      <div>
        <span className="contact-info__name form__comtact form__comtact-name">Name:</span>
        <input
          className="form__input"
          value={bookList.name}
          name="name"
          onChange={onInputChange}
        ></input>
      </div>
      <div>
        <span className="contact-info__name form__comtact form__comtact-surname">Surname:</span>
        <input
          className="form__input"
          value={bookList.surname}
          name="surname"
          onChange={onInputChange}
        ></input>
      </div>
      <div>
        <span className="contact-info__name form__comtact form__comtact-phone">Phone:</span>
        <input
          className="form__input"
          value={bookList.phone}
          name="phone"
          type="tel"
          onChange={onInputChange}
        ></input>
      </div>
      <div className="form__button-wrapper">
        <button type="submit" className="contact-info__button  form__button-send">
          Send
        </button>
        <button
          onClick={onItemClick}
          type="button"
          className="contact-info__button  form__button-send"
        >
          Clouse
        </button>
      </div>
    </form>
  );
}

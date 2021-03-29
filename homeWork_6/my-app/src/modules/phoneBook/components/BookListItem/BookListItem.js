import React, { Component } from 'react';
import './BookListItem.scss';

export default function BookListItem({ item, onDelete }) {
  function onContactDelete(e) {
    e.stopPropagation();

    onDelete(item.id);
  }

  return (
    <>
      <li>
        <ul className="contact-info">
          <li className="contact-info__item">
            <span className="contact-info__name">Name:</span> {item.name}
          </li>
          <li className="contact-info__item">
            <span className="contact-info__name">Surname:</span> {item.surname}
          </li>
          <li className="contact-info__item">
            <span className="contact-info__name">Phone:</span> {item.phone}
          </li>
          <div>
            <button onClick={onContactDelete} className="contact-info__button">
              Delete
            </button>
          </div>
        </ul>
      </li>
    </>
  );
}

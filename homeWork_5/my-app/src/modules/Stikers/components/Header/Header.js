import React, { useState, useEffect } from 'react';
import './Header.scss';

export default function Header({ onSave }) {
  const [stick, setStick] = useState({
    description: '',
  });

  function onFormSubmit(e) {
    e.preventDefault();

    onSave(stick);
    setStick({ description: '' });
  }

  return (
    <header className="sticker-header__wrapper">
      <button className="sticker-header__button" onClick={onFormSubmit}>
        +Add New
      </button>
    </header>
  );
}

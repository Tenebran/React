import React, { Component, useState } from 'react';
import { themeContext } from './context/themeContext';
import Book from './modules/phoneBook/components/Boock/Book';

export default function App() {
  const [theme, setTheme] = useState('dark');

  function whiteTheme() {
    setTheme('white');
  }

  function darkTheme() {
    setTheme('dark');
  }

  const contextSelectTheme = {
    theme,
    whiteTheme,
    darkTheme,
  };

  return (
    <themeContext.Provider value={contextSelectTheme}>
      <Book />
    </themeContext.Provider>
  );
}

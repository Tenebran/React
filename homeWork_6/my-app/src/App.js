import React, { Component, useState } from 'react';
import ThemeProvider, { themeContext } from './context/themeContext';
import Book from './modules/phoneBook/components/Boock/Book';

export default function App() {
  return (
    <ThemeProvider>
      <Book />
    </ThemeProvider>
  );
}

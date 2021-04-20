import React, { useState, useContext } from 'react';
import { themeContext } from '../../../context/themeContext';
import './ThemeToggler.scss';

export default function ThemeToggler() {
  const { selectWhiteTheme, selectDarkTheme, theme } = useContext(themeContext);
  const [themeTitle, setThemeTitle] = useState('Dark');

  function onChangeTheme() {
    if (theme === 'white') {
      selectDarkTheme();
      setThemeTitle('Dark');
    } else if (theme === 'dark') {
      selectWhiteTheme();
      setThemeTitle('Light');
    }
  }

  return (
    <button onClick={onChangeTheme} className={`button__theme button__theme__${themeTitle}`}>
      {themeTitle}
    </button>
  );
}

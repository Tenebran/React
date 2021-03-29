import React, { useContext } from 'react';
import { themeContext } from '../../../../context/themeContext';

export default function ThemeToggler() {
  const { selectWhiteTheme, selectDarkTheme, theme } = useContext(themeContext);
  function onChangeTheme() {
    if (theme === 'white') {
      selectDarkTheme();
    } else if (theme === 'dark') {
      selectWhiteTheme();
    }
  }

  return (
    <button onClick={onChangeTheme} className=" contact-info__button contact-info__button__add ">
      {theme}
    </button>
  );
}

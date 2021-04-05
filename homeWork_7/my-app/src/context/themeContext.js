import { createContext } from 'react';
import React, { useState } from 'react';
export const themeContext = createContext('pannel__content_white');

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('pannel__content_dark');

  function selectWhiteTheme() {
    setTheme('pannel__content_white');
  }

  function selectDarkTheme() {
    setTheme('pannel__content_dark');
  }

  const contextSelectTheme = {
    theme,
    selectDarkTheme,
    selectWhiteTheme,
  };

  return <themeContext.Provider value={contextSelectTheme}>{children}</themeContext.Provider>;
}

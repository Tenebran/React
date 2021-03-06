import { createContext } from 'react';
import React, { Component, useState } from 'react';
export const themeContext = createContext('white');

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function selectWhiteTheme() {
    setTheme('white');
  }

  function selectDarkTheme() {
    setTheme('dark');
  }

  const contextSelectTheme = {
    theme,
    selectDarkTheme,
    selectWhiteTheme,
  };

  console.log('userprovider');
  return <themeContext.Provider value={contextSelectTheme}> {children}</themeContext.Provider>;
}

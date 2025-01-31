import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const lightTheme = {
  body: '#f4f4f4',
  text: '#333',
  background: '#fff',
  border: '#ddd',
};

export const darkTheme = {
  body: '#1a1a1a',
  text: '#f4f4f4',
  background: '#24292e',
  border: '#444',
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

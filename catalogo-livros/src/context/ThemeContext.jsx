import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light"); 

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); 
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
import React, { useEffect, useState } from 'react';
import DarkModeContext from './DarkModeContext';
import { DarkModeContextType } from '../types/types';

type DarkModeProviderProps = {
  children: React.ReactNode;
};

function DarkModeProvider({ children }: DarkModeProviderProps) {
/*   const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  }); */

  const [darkMode, setDarkMode] = useState<boolean>(false);

  /*   const applyDarkModeStyles = (darkMode: boolean) => {
    const { body } = document;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }; */

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };
  /*
  useEffect(() => {
    applyDarkModeStyles(isDarkMode);
  }, [isDarkMode]); */

  const contextValue: DarkModeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={ contextValue }>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;

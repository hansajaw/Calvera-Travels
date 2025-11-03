import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the Context object
export const ThemeContext = createContext({
  theme: 'light', 
  toggleTheme: () => {},
});

// 2. Create the Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage and set initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("calvera-theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Determine the initial theme
    let initialTheme = 'light';
    if (savedTheme === 'light' || savedTheme === 'dark') {
      initialTheme = savedTheme;
    } else if (prefersDark) {
      initialTheme = 'dark';
    }

    setTheme(initialTheme);
    document.body.setAttribute("data-theme", initialTheme);
  }, []); // Run only once on mount

  // Apply theme to the body and save to localStorage whenever theme state changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("calvera-theme", theme);
  }, [theme]);
  
  // Toggle function
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easier access to the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
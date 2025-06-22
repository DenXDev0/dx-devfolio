import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const darkMode = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    setIsDark(darkMode);
  };

  return { isDark, toggleTheme };
};

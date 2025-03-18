import React from "react";
import useTheme from "../hooks/useTheme"; // Importamos el hook personalizado

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Usamos el hook

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition duration-300 hover:scale-110"
    >
      <i className={`bi ${theme === "light" ? "bi-moon-fill" : "bi-sun-fill"} text-xl`}></i>
    </button>
  );
};

export default ThemeToggle



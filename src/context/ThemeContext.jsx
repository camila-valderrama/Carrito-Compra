import { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

// Hook personalizado para acceder al tema fácilmente
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Estado del tema (claro por defecto)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Leer de localStorage
  });

  // Efecto para aplicar el tema cuando cambia
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Agrega clase para Tailwind
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Guardar preferencia en localStorage
  }, [theme]);

  // Alternar entre claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

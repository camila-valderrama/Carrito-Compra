import { useState, useEffect } from "react";

const useTheme = () => {
  // Cargar el tema desde localStorage o usar "light" por defecto
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Aplicar el tema al cargar la página
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Guardar en localStorage
  }, [theme]);

  // Alternar entre claro y oscuro
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};

export default useTheme

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>Catálogo de Livros</h1>
      <button className="btn theme" onClick={toggleTheme}>
        {theme === "light" ? "Tema: Claro" : "Tema: Escuro"}
      </button>
    </header>
  );
}

export default Header;

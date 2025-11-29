import { useRef, useEffect } from "react";

function SearchBar({ search, setSearch }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <label htmlFor="search">Buscar livro:</label>
      <input
        id="search"
        ref={inputRef}
        type="text"
        placeholder="Digite título ou autor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

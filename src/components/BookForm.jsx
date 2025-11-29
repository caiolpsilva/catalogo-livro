import { useState } from "react";

function BookForm({ adicionarLivro }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !autor.trim() || !ano.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    addBook({ titulo, autor, ano });
    setTitulo("");
    setAutor("");
    setAno("");
  };

  return (
    <>
    <h2>Adicionar Livro</h2>
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ano"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit" className="btn add">
        Adicionar
      </button>
    </form>
    </>
  );
}

export default BookForm;

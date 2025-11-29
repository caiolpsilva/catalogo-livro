import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Counters from "../components/Counters";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Catalogo() {
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    setCarregando(true);
    fetch("/data/books.json")
      .then((res) => res.json())
      .then((data) => {
        setLivros(data);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Erro ao carregar livros.");
        setCarregando(false);
      });
  }, []);

  const livrosFiltrados = livros.filter(
    (l) =>
      l.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      l.autor.toLowerCase().includes(busca.toLowerCase())
  );

  const remover = (id) => setLivros(livros.filter((l) => l.id !== id));

  if (carregando) return <Loading />;
  if (erro) return <ErrorMessage mensagem={erro} />;

  return (
    <section className="catalogo">
      <h2>Catálogo</h2>
      <SearchBar search={busca} setSearch={setBusca} />
      <Counters total={livros.length} filtered={livrosFiltrados.length} />
      {livrosFiltrados.length === 0 ? (
        <p className="empty">Nenhum livro encontrado.</p>
      ) : (
        <ul className="book-list">
          {livrosFiltrados.map((livro) => (
            <BookCard key={livro.id} livro={livro} remover={remover} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Catalogo;

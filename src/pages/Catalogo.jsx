import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import SearchBar from "../components/SearchBar";
import Counters from "../components/Counters";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import livrosData from "../../public/data/books.json";

function Catalogo() {
  const [livros, setLivros] = useLocalStorage("livros", []);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        setCarregando(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (livros.length === 0) {
          setLivros(livrosData);
        }
      } catch (err) {
        setErro("Erro ao carregar os livros. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    };

    carregarLivros();
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
      
      {livrosFiltrados.length === 0 && !carregando ? (
        <div className="no-results">
          <p className="empty">Nenhum livro encontrado.</p>
          {busca && <p>Tente outra busca ou limpe o campo de pesquisa.</p>}
        </div>
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
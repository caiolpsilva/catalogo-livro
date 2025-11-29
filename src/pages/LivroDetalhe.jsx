import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function LivroDetalhe() {
  const { id } = useParams();
  const navegar = useNavigate();
  const [livro, setLivro] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    setCarregando(true);
    fetch("/data/books.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((l) => String(l.id) === String(id));
        if (encontrado) setLivro(encontrado);
        else setErro("Livro não encontrado.");
        setCarregando(false);
      })
      .catch(() => {
        setErro("Erro ao carregar detalhes do livro.");
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <Loading />;
  if (erro) return <ErrorMessage mensagem={erro} />;
  if (!livro) return <p className="empty">Livro não encontrado.</p>;

  return (
    <article className="book-detail">
      <h2>{livro.titulo}</h2>
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Ano:</strong> {livro.ano}</p>
      {livro.editora && <p><strong>Editora:</strong> {livro.editora}</p>}
      {livro.descricao && <p>{livro.descricao}</p>}
      <div className="detail-actions">
        <button className="btn" onClick={() => navegar(-1)}>Voltar</button>
      </div>
    </article>
  );
}

export default LivroDetalhe;

import { Link } from "react-router-dom";

function BookCard({ livro, remover }) {
  return (
    <li className="book-item">
      <div>
        <strong>{livro.titulo}</strong> — {livro.autor} ({livro.ano})
      </div>
      <div className="actions">
        <Link to={`/catalogo/${livro.id}`} className="btn details">Ver detalhes</Link>
        <button className="btn remove" onClick={() => remover(livro.id)}>Remover</button>
      </div>
    </li>
  );
}

export default BookCard;

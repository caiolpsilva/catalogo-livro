function BookList({ livros, removerLivro }) {
  if (books.length === 0) {
    return <p className="empty">Nenhum livro encontrado.</p>;
  }

  return (
    <div className="book-list">
      <h2>Lista de Livros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div>
              <strong>{book.titulo}</strong> — {book.autor} ({book.ano})
            </div>
            <button
              className="btn remove"
              onClick={() => removeBook(book.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

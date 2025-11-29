import { useNavigate } from "react-router-dom";

function Home() {
  const navegar = useNavigate();

  return (
    <section className="home">
      <h2>Bem-vindo ao Catálogo Digital</h2>
      <p>Explore nossa coleção de livros. Use o botão abaixo para entrar no catálogo.</p>
      <button className="btn primary" onClick={() => navegar('/catalogo')}>Entrar no Catálogo</button>
    </section>
  );
}

export default Home;

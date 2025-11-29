import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="container">
      <Header />
      <nav className="menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Início</NavLink>
        <NavLink to="/catalogo" className={({ isActive }) => (isActive ? "active" : "")}>Catálogo</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

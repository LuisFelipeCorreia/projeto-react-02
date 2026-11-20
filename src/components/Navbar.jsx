import { NavLink, Link } from 'react-router-dom'

export default function Navbar({ totalInscricoes }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand">
          <span className="dot"></span>
          EventHub <span>SENAI</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'ativo' : '')}>
            Explorar Eventos
          </NavLink>
          <NavLink to="/inscricoes" className={({ isActive }) => (isActive ? 'ativo' : '')}>
            Minhas Inscrições ({totalInscricoes})
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
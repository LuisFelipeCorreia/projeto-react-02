import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="container centro">
      <span className="badge">Erro 404</span>
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe nesta aplicação.</p>
      <Link to="/" className="btn-primario">Voltar para a Página Inicial</Link>
    </main>
  )
}
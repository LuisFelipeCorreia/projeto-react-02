import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EVENTOS } from '../data/eventos'

export default function Home({ inscricoes }) {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todos')

  const categorias = ['Todos', 'Front-end', 'Back-end', 'Design & CSS', 'Hackathon']

  const eventosFiltrados = EVENTOS.filter((ev) => {
    const bateCat = categoria === 'Todos' || ev.categoria === categoria
    const bateBusca = ev.titulo.toLowerCase().includes(busca.toLowerCase())
    return bateCat && bateBusca
  })

  return (
    <main className="container">
      <section className="hero">
        <span className="badge">Aula 09 • React Router &amp; SPA Multi-Páginas</span>
        <h1>Descubra e inscreva-se nos próximos eventos de tecnologia</h1>
        <p>Projeto integrador EventHub com navegação dinâmica, rotas parametrizadas e gestão de inscrições.</p>
      </section>

      <div className="filtros-box">
        <input
          type="text"
          placeholder="🔍 Buscar evento por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <div className="chips">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={categoria === cat ? 'ativo' : ''}
              onClick={() => setCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="grid">
        {eventosFiltrados.map((evento) => {
          const jaInscrito = inscricoes.some((item) => item.eventoId === evento.id)
          return (
            <article key={evento.id} className="card">
              <div className="card-top">
                <span className="cat">{evento.categoria}</span>
                {jaInscrito && <span className="inscrito-tag">✓ Inscrito</span>}
              </div>
              <h2>{evento.titulo}</h2>
              <p className="meta">📅 {evento.data}</p>
              <p className="meta">📍 {evento.local}</p>
              <Link to={`/evento/${evento.id}`} className="btn-detalhes">
                Ver Detalhes e Vagas →
              </Link>
            </article>
          )
        })}
      </section>
    </main>
  )
}
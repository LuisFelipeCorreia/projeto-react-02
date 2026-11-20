import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { EVENTOS } from '../data/eventos'

export default function EventoDetalhes({ inscricoes, onInscrever }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const evento = EVENTOS.find((ev) => ev.id === id)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  if (!evento) {
    return (
      <main className="container centro">
        <h2>Evento não encontrado</h2>
        <Link to="/" className="btn-primario">Voltar para a listagem</Link>
      </main>
    )
  }

  const jaInscrito = inscricoes.some((item) => item.eventoId === evento.id)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nome.trim() || !email.trim()) return

    onInscrever({
      eventoId: evento.id,
      titulo: evento.titulo,
      data: evento.data,
      local: evento.local,
      participante: nome.trim(),
      email: email.trim(),
      protocolo: `EVT-${Math.floor(1000 + Math.random() * 9000)}`
    })

    navigate('/inscricoes')
  }

  return (
    <main className="container">
      <Link to="/" className="voltar">← Voltar para todos os eventos</Link>

      <div className="detalhes-grid">
        <section className="detalhes-info">
          <span className="cat">{evento.categoria}</span>
          <h1>{evento.titulo}</h1>
          <p className="descricao">{evento.descricao}</p>

          <ul className="lista-info">
            <li><strong>📅 Data e Horário:</strong> {evento.data}</li>
            <li><strong>📍 Local:</strong> {evento.local}</li>
            <li><strong>🎤 Palestrante:</strong> {evento.palestrante}</li>
            <li><strong>🎟️ Capacidade:</strong> {evento.vagas} vagas</li>
          </ul>
        </section>

        <aside className="form-box">
          <h2>Garantir Minha Vaga</h2>
          {jaInscrito ? (
            <div className="aviso-inscrito">
              <p>Você já está inscrito neste evento!</p>
              <Link to="/inscricoes" className="btn-primario">Ver Meu Comprovante</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Nome Completo
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </label>
              <label>
                E-mail para Confirmação
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className="btn-primario">Confirmar Inscrição</button>
            </form>
          )}
        </aside>
      </div>
    </main>
  )
}
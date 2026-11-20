import { Link } from 'react-router-dom'

export default function MinhasInscricoes({ inscricoes, onCancelar }) {
  return (
    <main className="container">
      <div className="pagina-header">
        <h1>Minhas Inscrições ({inscricoes.length})</h1>
        <p>Comprovantes salvos localmente no seu navegador.</p>
      </div>

      {inscricoes.length === 0 ? (
        <div className="vazio-box">
          <p>Você ainda não realizou inscrição em nenhum evento.</p>
          <Link to="/" className="btn-primario">Explorar Eventos Disponíveis</Link>
        </div>
      ) : (
        <div className="grid">
          {inscricoes.map((item) => (
            <article key={item.eventoId} className="card">
              <div className="card-top">
                <span className="protocolo">Protocolo: {item.protocolo}</span>
                <span className="inscrito-tag">Confirmado</span>
              </div>
              <h2>{item.titulo}</h2>
              <p className="meta">👤 Participante: {item.participante}</p>
              <p className="meta">📅 {item.data}</p>
              <p className="meta">📍 {item.local}</p>
              <button
                type="button"
                className="btn-cancelar"
                onClick={() => onCancelar(item.eventoId)}
              >
                Cancelar Inscrição
              </button>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
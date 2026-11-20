import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EventoDetalhes from './pages/EventoDetalhes'
import MinhasInscricoes from './pages/MinhasInscricoes'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  const [inscricoes, setInscricoes] = useState(() => {
    const salvas = localStorage.getItem('eventhub_inscricoes_v1')
    return salvas ? JSON.parse(salvas) : []
  })

  useEffect(() => {
    localStorage.setItem('eventhub_inscricoes_v1', JSON.stringify(inscricoes))
  }, [inscricoes])

  const adicionarInscricao = (nova) => {
    setInscricoes((prev) => [...prev, nova])
  }

  const cancelarInscricao = (eventoId) => {
    setInscricoes((prev) => prev.filter((item) => item.eventoId !== eventoId))
  }

  return (
    <BrowserRouter>
      <Navbar totalInscricoes={inscricoes.length} />
      <Routes>
        <Route path="/" element={<Home inscricoes={inscricoes} />} />
        <Route
          path="/evento/:id"
          element={<EventoDetalhes inscricoes={inscricoes} onInscrever={adicionarInscricao} />}
        />
        <Route
          path="/inscricoes"
          element={<MinhasInscricoes inscricoes={inscricoes} onCancelar={cancelarInscricao} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
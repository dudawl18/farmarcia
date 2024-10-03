import './App.css'
import Body from './components/Body'
import { useState } from 'react'
import Logo from "./assets/images/farmarcia-logo-pq.png"
import NovaDirecao from './components/NovaDirecao'
import Campanha from './components/Campanha'

function App() {
  const [pagina, setPagina] = useState(<Body />)

  return (
    <>

      <header>
        <div className='header-container'>
          <img src={Logo} className='logo' alt="duas maões em formato de concha vistas de lado viradas para cima comum coração vermelho flutuando no meio delas" />
          <button onClick={() => { setPagina(<Body />) }} className='titulos'>Farmárcia</button>
          <input className='navbarInput' type="text" placeholder='Pesquise sua informação' />
          <button onClick={() => { setPagina(<NovaDirecao />) }} className="buttonHomeP" >Nova Direção</button>
          <button onClick={() => { setPagina(<Campanha />) }} className="buttonHomeP" >Campanha</button>
        </div>
      </header>

      {pagina}

    </>
  )
}

export default App

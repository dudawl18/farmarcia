import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { useState } from 'react'


function App() {
  const [pagina, setPagina] = useState(<Body />)

  return (
    <>
      <Header />
     

        <button onClick={() => { setPagina(<Atendimento />) }} className="buttonHomeP" >Atendimento</button>
        <button onClick={() => { setPagina(<NovaDirecao />) }} className="buttonHomeP" >Nova Direção</button>
        <button onClick={() => { setPagina(<Campanha />) }} className="buttonHomeP" >Campanha</button>

   
       {pagina}

    </>
  )
}

export default App

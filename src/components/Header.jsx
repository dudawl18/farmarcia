import React from 'react'
import '/src/App.css'
import Logo from "../assets/images/farmarcia-logo-pq.png"

function Header() {

    return (

        <header>
            <div className='header-container'>
                <img src={Logo} className='logo' alt="duas maões em formato de concha vistas de lado viradas para cima comum coração vermelho flutuando no meio delas" />
                <h1 className='titulos'>Farmárcia</h1>
                <input className='navbarInput' type="text" placeholder='Pesquise seu produto' />
                <a href="" className='topicosHeader'>Home</a>
                <a href="" className='topicosHeader'>Produtos</a>
                <a href="" className='topicosHeader'>Contato</a>
                <a href="" className='topicosHeader'>Ajuda</a>
            </div>

        </header>
    )
}

export default Header

import React from 'react'
import '/src/App.css'

function Header() {

    return (

        <header>
            <div className='header-container'>
                <h1>Farmárcia</h1>
                <input className='navbarInput' type="text" />
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Nossas ofertas</a>
                <a href="">Ajuda</a>

            </div>

        </header>
    )
}

export default Header

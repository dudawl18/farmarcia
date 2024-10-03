import React from 'react'
import "./Campanha.css"
import camisaP from "../assets/images/farmarciaCamisetasP.png"
import camisaG from "../assets/images/farmarciaCamisetaG.png"

function Campanha() {

  return (

    <div className='campanha-container'>
      <h3 className='campanhaTitulo'>Campanha</h3>
      <img src={camisaP} className='imgCamisetas' alt="" />
      <img src={camisaG} className='imgCamisetas' alt="" />
    </div>


  )
}

export default Campanha

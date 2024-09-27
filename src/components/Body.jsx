import farmarciaG from "../assets/images/farmarciaG.png"

function Body() {

  return (

    <body>
      <div className="totalBody">
        <div className="ladoEsquerdo">
          <h2 className="titulos">Novidades</h2>
          <img src={farmarciaG} className="imageBody" alt="duas maões em formato de concha vistas de lado viradas para cima comum coração vermelho flutuando no meio delas. Abaixo essa escrito 'Farmárcia' e 'Sob nova direção (Ex Farmárcio)" />
        </div>
        <div className="ladoDireito">
          <a href="" className="topicosBody">Inauguração</a>
          <a href="" className="topicosBody">Nova Direção</a>
          <a href="" className="topicosBody">Campanha</a>
        </div>
      </div>
    </body>

  )
}

export default Body

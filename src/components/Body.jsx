import farmarciaG from "../assets/images/farmarciaG.png"
import Campanha from "./Campanha"
import NovaDirecao from "./NovaDirecao"
import Atendimento from "./Atendimento"


function Body() {

  return (

    <body>
      <div className="totalBody">
        <div className="ladoEsquerdo">
          <h2 className="tituloBodyHomeP">Novidades</h2>
          <img src={farmarciaG} className="imageBodyHomeP" alt="duas maões em formato de concha vistas de lado viradas para cima comum coração vermelho flutuando no meio delas. Abaixo essa escrito 'Farmárcia' e 'Sob nova direção (Ex Farmárcio)" />
        </div>
        <div className="ladoDireitoHomeP">
          <p className="tituloBodyLadoD">Inauguração da nossa farmácia: Não perca! </p>
          <h3 className="descricaoBodyLadoD">🎈 Participe desta data tão especial! Traga amigos e família para celebrar essa nova etapa de nossa vida.</h3>
          <h3 className="descricaoBodyLadoD">👉 Confira também os produtos da Farmárcia que estão à venda, basta clicar em "Campanha" ou comparecer ao evento.</h3>
          <div>
            <h3 className="descricaoBodyLadoD">📅 Data: 03/10/2024.</h3>
            <h3 className="descricaoBodyLadoD">🕒 Horário: 16h40.</h3>
            <h3 className="descricaoBodyLadoD">📍 Endereço: Farmárcia, antigo Farmário.</h3>
          </div>
        </div>
      </div>
    </body>


  )
}

export default Body

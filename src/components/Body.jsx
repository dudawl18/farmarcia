import farmarciaG from "../assets/images/farmarciaG.png"
import Campanha from "./Campanha"
import NovaDirecao from "./NovaDirecao"


function Body() {

  return (

    <div>
      <div className="totalBody">
        <div className="ladoEsquerdo">
          <h2 className="tituloBodyHomeP">Novidades</h2>
          <img src={farmarciaG} className="imageBodyHomeP" alt="duas maões em formato de concha vistas de lado viradas para cima comum coração vermelho flutuando no meio delas. Abaixo essa escrito 'Farmárcia' e 'Sob nova direção (Ex Farmárcio)" />
        </div>
        <div className="ladoDireitoHomeP">
          <p className="tituloBodyLadoD">Inauguração da nossa farmácia: Não perca! </p>
          <p className="descricaoBodyLadoD">🎈 Participe desta data tão especial! Traga amigos e família para celebrar essa nova etapa de nossa vida.</p>
          <p className="descricaoBodyLadoD">👉 Confira também os produtos da Farmárcia que estão à venda, basta clicar em "Campanha" ou comparecer ao evento.</p>
          <div>
            <p className="descricaoBodyLadoD">📅 Data: 03/10/2024.</p>
            <p className="descricaoBodyLadoD">🕒 Horário: 16h40.</p>
            <p className="descricaoBodyLadoD">📍 Endereço: Farmárcia, antiga Farmário.</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Body

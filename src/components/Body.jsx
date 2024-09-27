import farmarciaG from "../assets/images/farmarciaG.png"
import Campanha from "./Campanha"
import Inaugurar from "./Inaugurar"
import NovaDirecao from "./NovaDirecao"

function Body() {

  return (

    <body>
      <div className="totalBody">
        <div className="ladoEsquerdo">
          <h2 className="tituloBodyHomeP">Novidades</h2>
          <img src={farmarciaG} className="imageBodyHomeP" alt="duas maões em formato de concha vistas de lado viradas para cima comum coração vermelho flutuando no meio delas. Abaixo essa escrito 'Farmárcia' e 'Sob nova direção (Ex Farmárcio)" />
        </div>
        <div className="ladoDireitoHomeP">
          
        </div>
      </div>
    </body>
    

  )
}

export default Body

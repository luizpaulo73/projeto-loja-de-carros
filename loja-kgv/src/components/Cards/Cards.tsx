import * as styled from "./styled";
import { listaCarros } from "./Data";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div>
      <h1 className="verCarros">Ver mais carros</h1>
      
      <styled.DivCarros>
        {listaCarros.map((carro) => (
          <Link to={`/carros/${carro.id}`}>
          <styled.DivCarro className="carros">
            <styled.ImgCarro src={carro.foto1} alt={carro.nome} />
            <h3>{carro.nome}</h3>
            <p>
              {carro.anoFabricacao}/{carro.anoModelo}
            </p>
            <p>{carro.km} Km</p>
          </styled.DivCarro>
          </Link>
        ))}
      </styled.DivCarros>
    </div>
  );
}

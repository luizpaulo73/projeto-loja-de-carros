import { listaCarros } from "../../Data";

export default function Cards() {
  return (
    <div>
    <div className="degrade"></div>
    <h1 className="verCarros">Ver mais carros</h1>
    <div className="divCarros">
      <div className="carros">
        
        {listaCarros.map((carro) => (
          <>
            <img src={carro.foto1} alt="" />
            <h3>{carro.nome}</h3>
            <p>{carro.anoFabricacao}/{carro.anoModelo}</p>
            <p>{carro.km}</p>
          </>
          ))}
      </div>
    </div>
  </div>
  )
}

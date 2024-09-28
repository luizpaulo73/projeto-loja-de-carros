import styles from "./Cards.module.css";
import { listaCarros } from "../../data/Data";
import { Link } from "react-router-dom";

export default function Cards() {

  return (
    <div>
      <h1 className={styles.verCarros}>Ver mais carros</h1>
      <div className={styles.divCarros}>
        {listaCarros.map((carro) => (
          <div className={styles.divCarro} key={carro.id}>
            <img className={styles.imgCarro} src={carro.foto1} alt={carro.nome} />
            <h3>{carro.nome}</h3>
            <p>
              {carro.anoFabricacao}/{carro.anoModelo}
            </p>
            <p>{carro.km} Km</p>
            <Link to={`/carro/${carro.id}`} className={styles.linkCarro}></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
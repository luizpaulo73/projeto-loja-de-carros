import { useParams } from "react-router-dom";
import { listaCarros } from "../../components/Cards/Data";
import { useState } from "react";
import styles from "./Carro.module.css";
import { typeCarro } from "../../components/Cards/Data";

import seta from "/images/seta.png"

export default function Carro() {
  const { id } = useParams();
  const carro: typeCarro | undefined = listaCarros.find(carro => carro.id);
if (!carro) {
  return <div>Carro não encontrado</div>;
}
  document.title = carro.nome;

const [foto , setFoto] = useState<number>(1)

  return (
    <>
        <div key={id}>
          <h1>{carro.nome}</h1>
          <p>{carro.preco}</p>
          <div className={styles.divImagemCarro}>
          <button onClick={foto == 1 ? () => setFoto(5) :() => setFoto(foto - 1)}><img src={seta} alt="seta" className={styles.setaE}/></button>
          <img src={carro[`foto${foto}`]} alt={carro.nome} className={styles.imgCarro}/>
          <button onClick={foto == 5 ? () => setFoto(1) :() => setFoto(foto + 1)}><img src={seta} alt="seta" className={styles.setaD}/></button>
          </div>
        </div>

    </>
  )
}

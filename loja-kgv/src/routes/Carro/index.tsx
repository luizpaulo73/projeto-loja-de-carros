import { useParams } from "react-router-dom";
import { listaCarros } from "../../components/Cards/Data";
import { useState } from "react";
import styles from "./Carro.module.css";

import seta from "/images/seta.png"

export default function Carro() {
  const { id } = useParams();
  const carro = listaCarros.find(carro => carro.id === parseInt(id));
  document.title = carro.nome;

  const [foto , setFoto] = useState(1)



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

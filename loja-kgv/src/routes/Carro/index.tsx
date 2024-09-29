import { useParams } from "react-router-dom";
import { listaCarros } from "../../data/Data";
import { useState } from "react";
import styles from "./Carro.module.css";
import { typeCarro } from "../../components/Cards/Data";

import seta from "/images/seta.png"
import InfoCarro from "../../components/InfoCarro/InfoCarro";
import { TypeCarro } from "../../data/Types";

export default function Carro() {
  const { id } = useParams();
<<<<<<< HEAD

  const carro: TypeCarro | undefined = listaCarros.find(carro => carro.id == parseInt(id));
  
  
  document.title = carro?.nome || "Carro Nao Encontrado";

  const [foto, setFoto] = useState<number>(1);
=======
  const carro: typeCarro | undefined = listaCarros.find(carro => carro.id);
if (!carro) {
  return <div>Carro não encontrado</div>;
}
  document.title = carro.nome;

const [foto , setFoto] = useState<number>(1)
>>>>>>> 7f15d354a1f6dd1441d880e4a9c0de5be588f22c

  return (
    <>
      <main className={styles.container}>
        <div key={id} className={styles.conteudo}>
          <div className={styles.infoPrincipal}>
            <div>
              <h2>{carro?.nome}</h2>
              <p>{carro?.cor} - {carro?.anoModelo}</p>
            </div>
            <p>R$ {carro?.preco}</p>
          </div>
          <div className={styles.divImagemCarro}>
            <button onClick={foto == 1 ? () => setFoto(5) : () => setFoto(foto - 1)}>
              <img src={seta} alt="seta" className={styles.setaE} />
            </button>
            <img src={carro ? carro[`foto${foto}`] : ''} alt={carro?.nome} className={styles.imgCarro} />
            <button onClick={foto == 5 ? () => setFoto(1) : () => setFoto(foto + 1)}>
              <img src={seta} alt="seta" className={styles.setaD} />
            </button>
          </div>
          <InfoCarro carro={carro}/>
        </div>
      </main>
    </>
  );
}

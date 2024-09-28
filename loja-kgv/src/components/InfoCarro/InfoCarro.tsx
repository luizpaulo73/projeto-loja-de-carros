import styles from "./InfoCarro.module.css"
import { TypeCarro } from "../../data/Types"

// Agora o componente aceita uma lista de carros
export default function InfoCarro({ carro }: { carro: TypeCarro }) {
  return (
    <div>
        <div className={styles.infos}>
          <p>Marca: {carro.marca}</p>
          <p>Modelo: {carro.modelo}</p>
          <p>Versão: {carro.versao}</p>
          <p>Preço: {carro.preco}</p>
          <p>Ano fabricação: {carro.anoFabricacao}</p>
          <p>Ano modelo: {carro.anoModelo}</p>
          <p>KM: {carro.km}</p>
          <p>Motor: {carro.motor}</p>
          <p>Potência: {carro.potencia}</p>
          <p>Aceleração: {carro.aceleracao}</p>
          <p>Airbag: {carro.airbag}</p>
          <p>Combustível: {carro.combustivel}</p>
          <p>Conservação: {carro.conservacao}</p>
          <p>Transmissão: {carro.transmissao}</p>
          <p>Placa Fim: {carro.placaFim}</p>
          <p>Portas: {carro.portas}</p>
          <p>Cor: {carro.cor}</p>
          <p>Bancos: {carro.bancos}</p>
          <p>Freios: {carro.freios}</p>
          <p>Faróis: {carro.farois}</p>
          <p>Rodas: {carro.rodas}</p>
          <p>Blindado: {carro.blindado}</p>
          <p>Bluetooth: {carro.bluetooth}</p>
          <p>Teto solar: {carro.tetoSolar}</p>
          <p>Conversível: {carro.conversivel}</p>
          <p>Piloto automático: {carro.pilotoAutomatico}</p>
          <p>Multimídia: {carro.multimidia}</p>
          <p>Sensor de chuva: {carro.sensorChuva}</p>
          <p>Sensor de estacionamento: {carro.sensorEstacionamento}</p>
        </div>
    </div>
  );
}

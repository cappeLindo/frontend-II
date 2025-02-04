import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"/>
      <div className={styles.text}>
        <h1>Bem-vindo(a) à Clínica Santa Mônica</h1>
        <p>Clínica Santa Mônica – Excelência em Saúde<br></br>
        A Clínica Santa Mônica é referência em <br></br>atendimento médico especializado,
        oferecendo<br></br>diagnóstico preciso,tratamentos eficazes e <br></br>um cuidado humanizado. 
         Com profissionais <br></br>experientes e estrutura moderna,
         garantimos <br></br>qualidade e confiança para a sua saúde. 💙❤️</p>
        <div className={styles.buttonContainer}>
          <button className={styles.btn}>Agendar Consulta</button>
        </div>
      </div>
    </div>
  );
}

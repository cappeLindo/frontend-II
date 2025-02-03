import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"/>
      <div className={styles.text}>
        <p>Clínica Santa Mônica – Excelência em Saúde <br></br>
        A Clínica Santa Mônica é referência em atendimento médico especializado, <br></br>
        oferecendo diagnóstico preciso,<br></br> tratamentos eficazes e um cuidado humanizado. <br></br>
         Com profissionais experientes e estrutura moderna,<br></br>
         garantimos qualidade e confiança para a sua saúde. 💙❤️</p>
      </div>
    </div>
  );
}

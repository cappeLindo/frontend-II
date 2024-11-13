//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Página principal</h1>
      <p>&#60;/Seja bem vindo, meu nome é Vitor e essa é a minha página&#62;</p>
      <Image className={styles.img} src='/images/picasso.jpg' alt="" width={400} height={300}></Image>
      <button><a href="./sobre">página 2</a></button>
    </div>
  );

}

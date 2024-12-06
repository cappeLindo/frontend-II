import Link from "next/link";
import { styleText } from "util";
import styles from './header.module.css';




export default function Header() { 
    return ( 
        <header className={styles.head}>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/sobre'>Sobre</Link></li>
                    <li><Link href='/contato'>Contato</Link></li>
                    <li><Link href='/listas'>Listas</Link></li>
                    <li><Link href='/props'>Props</Link></li>
                </ul>
            </nav>
        </header>
    )


}